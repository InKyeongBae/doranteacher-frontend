import React, { useRef, useState, useMemo } from 'react';
import Button from '../../components/Button';
import '../../components/literallycanvas.css';
import { useWordDispatch, useWordNextId } from './WordContext';
import WordList from './WordList';

const LC = require('literallycanvas');
let _lc = null;

function WordPaint() {
	const [images, setImages] = useState([]);

	const dispatch = useWordDispatch();
	const nextId = useWordNextId();

	const onInit = (lc) => {
		_lc = lc;
		console.log(lc);
		// 라벨 텍스트 stroke -> 색상
		const colorpicker = document.getElementsByClassName('color-well')[0];
		const change = colorpicker.querySelector('label');
		change.innerText = '펜 색상';

		const reset = document.getElementsByClassName('lc-clear toolbar-button fat-button disabled')[0];
		reset.innerText = '새로 쓰기';
	};

	const onSave = (event) => {
		if (!_lc) return;
		const img = _lc.getImage();
		if (!img) return;
		try {
			const imgData = img.toDataURL();
			// ...images, 없앰으로써 최종본만 저장되도록
			setImages([imgData]);
			console.log(imgData);
			fetch('http://localhost:8080/ocrtext', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify({
					filepath: imgData,
				}),
			})
				.then((response) => response.json())
				.then((result) => {
					const newWord = result.filepath;
					dispatch({
						type: 'CREATE',
						word: {
							id: nextId.current,
							content: newWord,
						},
					});
					nextId.current += 1;
				});
		} catch (err) {
			console.log(err);
		}
	};

	const onRemove = (id) => dispatch({ type: 'REMOVE', id });

	return (
		<>
			<div className="canvas">
				<LC.LiterallyCanvasReactComponent
					onInit={onInit}
					backgroundColor="#ffffff"
					// 글씨판 가로세로 사이즈 설정(픽셀)
					imageSize={{ width: 500, height: 210 }}
					tools={[LC.tools.Pencil, LC.tools.Eraser]}
					strokeWidths={[3, 5, 7, 10, 15, 25]}
					imageURLPrefix="/img"
				/>
			</div>
			<div className="buttonline">
				<Button buttonText="단어 추가하기" outputColor="red" onClick={onSave} />
			</div>

			<WordList onRemove={onRemove} />
		</>
	);
}

export default WordPaint;
