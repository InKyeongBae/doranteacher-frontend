import React, { useState } from 'react';
import Button from '../../components/Button';
import '../../components/literallycanvas.css';
import SentenceList from './SentenceList';
import { ToastContainer, toast } from 'react-toastify';
import styled from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import { SentenceProvider, useSentenceDispatch, useSentenceNextId } from './SentenceContext';
import TextInput from '../../components/TextInput';

const LC = require('literallycanvas');
let _lc = null;

function SentencePaint() {
	const [images, setImages] = useState([]);

	const dispatch = useSentenceDispatch();
	const nextId = useSentenceNextId();

	const onInit = (lc) => {
		_lc = lc;
		// 라벨 텍스트 stroke -> 색상
		const colorpicker = document.getElementsByClassName('color-well')[0];
		const change = colorpicker.querySelector('label');
		change.innerText = '펜 색상';

		const reset = document.getElementsByClassName('lc-clear toolbar-button fat-button disabled')[0];
		reset.innerText = '새로 쓰기';
	};

	const pending = () => {
		toast.loading(`단어를 추가하는 중`, {
			position: toast.POSITION.BOTTOM_RIGHT,
			autoClose: false,
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
			pending();

			fetch('http://api.doranssam.com/ocrtext', {
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
					const newSentence = result.filepath;
					dispatch({
						type: 'CREATE',
						sentence: {
							id: nextId.current,
							content: newSentence,
						},
					});
					nextId.current += 1;
				});
		} catch (err) {
			console.log(err);
		}
	};
	const img = new Image();
	img.src = '/img/watermark.png';

	const onRemove = (id) => dispatch({ type: 'REMOVE', id });

	const StyledContainer = styled(ToastContainer)`
		&&&.Toastify__toast-container {
			bottom: 80px;
			right: 20px;
		}
		.Toastify__toast {
			font-size: 30px;
		}
		.Toastify__toast-body {
			//font-family: 'Cafe24Syongsyong';
			//font-family: 'ImcreSoojin OTF';
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
					// 글씨판 가로세로 사이즈 설정(픽셀) 210 -> 420
					imageSize={{ width: 800, height: 420 }}
					tools={[LC.tools.Pencil, LC.tools.Eraser]}
					strokeWidths={[3, 5, 7, 10, 15, 25]}
					imageURLPrefix="/img"
					watermarkImage={img}
					watermarkScale="0.53"
				/>
			</div>
			<div className="buttonline">
				<Button buttonText="다 썼어요!" outputColor="red" onClick={onSave} />
			</div>
			<div className="answer">
				나의 대답 <TextInput initText="이게 맞나요" trash/>
			</div>
			<SentenceList onRemove={onRemove} />
			<StyledContainer>
				<ToastContainer />
			</StyledContainer>
		</>
	);
}

export default SentencePaint;
