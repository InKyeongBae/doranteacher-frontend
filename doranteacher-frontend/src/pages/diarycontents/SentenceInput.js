import React, { useState, useEffect, useRef } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

function SentenceInput({ initText, onUpdate, id, trash }) {
	const [text, setText] = useState(initText);
	const [editable, setEditable] = useState(false);

	const ref = useRef(null);
	console.log(initText);
	console.log(text);

	// text상태일 때 onClick 이벤트로 넣어 줄 함수
	const editOn = (e) => {
		setEditable(true);
	};
	// input상태일 때 내용의 변화를 감지해서 text를 바꾸어 줌
	const handleChange = (e) => {
		setText(e.target.value);
	};
	// enter키를 눌렀을 때 입력을 중지하는 함수
	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			setEditable(!editable);
			onUpdate(id, text);
		}
	};

	const handleClickOutside = (e) => {
		if (editable == true && !ref.current.contains(e.target)) {
			setEditable(false);
			onUpdate(id, text);
		}
	};
	useEffect(() => {
		window.addEventListener('click', handleClickOutside, true);
	});

	return (
		// <>
		// 	<div className="editbox" ref={ref}>
		// 		{editable ? (
		// 			<input
		// 				className="onedit"
		// 				id="resizable"
		// 				type="text"
		// 				value={text}
		// 				onChange={(e) => handleChange(e)}
		// 				onKeyDown={handleKeyDown}
		// 			/>
		// 		) : (
		// 			<div className="offedit" onClick={() => editOn()}>
		// 				<div className="text">{text}</div>
		// 				{trash && (
		// 					<div className="trash">
		// 						<FaTrashAlt />
		// 					</div>
		// 				)}
		// 			</div>
		// 		)}
		// 	</div>
		// </>
		<div className="offedit">
			<div className="text">{text}</div>
			{trash && (
				<div className="trash">
					<FaTrashAlt />
				</div>
			)}
		</div>
	);
}

export default SentenceInput;
