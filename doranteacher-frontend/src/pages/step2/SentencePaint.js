import React, { useEffect, useRef, useState } from 'react';
import Button from '../../components/Button';
import '../../components/literallycanvas.css';
import { FaTrashAlt } from 'react-icons/fa';
import Sentence from './Sentence';
import { ToastContainer, toast } from 'react-toastify';
import styled from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import { useSentenceDispatch, useSentenceState } from './SentenceContext';

const LC = require('literallycanvas');
let _lc = null;

function SentencePaint() {
	const [images, setImages] = useState([]);
	const [text, setText] = useState('');
	const [editable, setEditable] = useState(false);

	const dispatch = useSentenceDispatch();
	const sentences = useSentenceState();
	const active = sentences.filter((sentence) => sentence.active);

	const onInit = (lc) => {
		_lc = lc;
		// 라벨 텍스트 stroke -> 색상
		const colorpicker = document.getElementsByClassName('color-well')[0];
		const change = colorpicker.querySelector('label');
		change.innerText = '펜 색상';

		const reset = document.getElementsByClassName('lc-clear toolbar-button fat-button disabled')[0];
		reset.innerText = '새로 쓰기';
	};

	const toastId = useRef(null);

	const pending = () =>
		(toastId.current = toast.loading(`단어를 추가하는 중`, {
			position: toast.POSITION.BOTTOM_RIGHT,
			autoClose: false,
		}));

	const dismiss = () => toast.dismiss(toastId.current);

	function onSave(event) {
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
					setText(newSentence);
					dispatch({
						type: 'CHANGE_ANSWER',
						sentence: {
							id: active[0].id,
							answer: newSentence,
						},
					});
					dismiss();
				});
		} catch (err) {
			console.log(err);
		}
	}
	const img = new Image();
	img.src = '/img/watermark.png';

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

	function onUpdate(updateid, answer) {
		dispatch({
			type: 'CHANGE_ANSWER',
			sentence: {
				id: updateid,
				answer: answer,
			},
		});
	}

	const id = active[0].id;
	function changeText() {
		setText(active[0].answer);
		setEditable(true);
	}
	// input상태일 때 내용의 변화를 감지해서 text를 바꾸어 줌
	function handleChange(e) {
		setText(e.target.value);
	}
	// enter키를 눌렀을 때 입력을 중지하는 함수
	function handleKeyDown(e) {
		if (e.key === 'Enter') {
			setEditable(!editable);
			onUpdate(id, text);
		}
	}

	function handleClickOutside(e) {
		const target = e.target;
		if (target === document.getElementsByClassName('onedit')[0]) return;
		if (target === document.getElementsByClassName('offedit')[0]) return;
		if (target === document.getElementsByClassName('trash')[0]) return;
		const buttons = document.getElementsByClassName('button');
		for (var i = 0; i < buttons.length; i++) {
			if (buttons[i].contains(target)) return;
		}
		if (editable === true) {
			setEditable(false);
			onUpdate(id, text);
		}
	}

	useEffect(() => {
		window.addEventListener('click', handleClickOutside, true);
	});

	function AnswerBox() {
		return (
			<div className="answer">
				나의 대답
				{editable ? (
					<>
						<input
							className="onedit"
							id="resizable"
							type="text"
							value={text}
							onChange={(e) => handleChange(e)}
							onKeyDown={handleKeyDown}
						/>
						<div className="trash">
							<FaTrashAlt />
						</div>
					</>
				) : (
					<Sentence
						key={1}
						id={id}
						active={active}
						initText={text}
						changeText={changeText}
						editable={editable}
						onUpdate={onUpdate}
					/>
				)}
			</div>
		);
	}

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
				<Button buttonText="다 썼어요!" inputColor="green" outputColor="purple" onClick={onSave} />
			</div>
			<AnswerBox />
			<AnswerBox />
			<AnswerBox />

			<StyledContainer>
				<ToastContainer />
			</StyledContainer>
		</>
	);
}

export default SentencePaint;
