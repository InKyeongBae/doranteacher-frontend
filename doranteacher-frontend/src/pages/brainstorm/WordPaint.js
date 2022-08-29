import React, { useState } from 'react';
import Button from '../../components/Button';
import '../../components/literallycanvas.css';
import { useWordDispatch, useWordNextId, useWordState } from './WordContext';
import WordList from './WordList';
import { ToastContainer, toast } from 'react-toastify';
import styled from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import { useCookies } from 'react-cookie';

const LC = require('literallycanvas');
let _lc = null;

function WordPaint() {
	const [images, setImages] = useState([]);

	const dispatch = useWordDispatch();
	const words = useWordState();
	const nextId = useWordNextId();

	const [cookies, setCookie] = useCookies(['acessToken']);

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

	const toastId = React.useRef(null);

	const pending = () => {
		toastId.current = toast.loading(`단어를 추가하는 중`, {
			position: toast.POSITION.BOTTOM_RIGHT,
			autoClose: false,
		});
	};

	const dismiss = () => toast.dismiss(toastId.current);

	const sameWord = () => {
		toast.error(`이미 추가 된 단어입니다. 다른 단어를 추가해 주세요!`, {
			position: toast.POSITION.BOTTOM_RIGHT,
			autoClose: 3000,
		});
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
			const removeId = pending();

			fetch('https://api.doranssam.com/ocrtext', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
					Authorization: `Bearer ${cookies['accessToken']}`,
				},
				body: JSON.stringify({
					filepath: imgData,
				}),
			})
				.then((response) => response.json())
				.then((result) => {
					const newWord = result.filepath;
					dismiss();
					for (var i = 0; i < words.length; i++) {
						if (newWord === words[i].content) {
							return false;
						}
					}
					return newWord;
				})
				.then((newWord) => {
					if (newWord !== false) {
						dispatch({
							type: 'CREATE',
							word: {
								id: nextId.current,
								content: newWord,
							},
						});
						nextId.current += 1;
					} else {
						sameWord();
					}
				});
		} catch (err) {
			console.log(err);
		}
	};

	const onRemove = (id) => dispatch({ type: 'REMOVE', id });
	const onUpdate = (id, content) =>
		dispatch({
			type: 'UPDATE',
			word: {
				id: id,
				content: content,
			},
		});

	const StyledContainer = styled(ToastContainer)`
		&&&.Toastify__toast-container {
			bottom: 80px;
			right: 20px;
		}
		.Toastify__toast {
			font-size: 30px;
		}
		.Toastify__toast-body {
			font-family: 'KOTRAHOPE';
			font-style: normal;
			font-size: 24px;
			color: black;
		}
		.Toastify__progress-bar {
		}
	`;

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
				<Button buttonText="단어 추가" outputColor="red" onClick={onSave} />
			</div>

			<WordList onRemove={onRemove} onUpdate={onUpdate} />
		</>
	);
}

export default WordPaint;
