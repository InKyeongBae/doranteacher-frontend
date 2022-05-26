import React, { useEffect, useRef, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Sentence from './Sentence';
import { useSentenceDispatch } from './SentenceContext';

function AnswerBox({ initText, onUpdate, id }) {
	const [text, setText] = useState(initText);
	const dispatch = useSentenceDispatch();
	const [editable, setEditable] = useState(false);

	const ref = useRef(null);

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

	function onUpdate(updateid, answer) {
		dispatch({
			type: 'CHANGE_ANSWER',
			sentence: {
				id: updateid,
				answer: answer,
			},
		});
		setText(answer);
	}

	return (
		<div className="answer">
			{id}번째 문장
			<div className="editbox" ref={ref}>
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
					<>
						<div className="offedit" onClick={() => editOn()}>
							{text}
						</div>
						<div className="trash">
							<FaTrashAlt
								onClick={() => {
									onUpdate(id, '');
								}}
							/>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default AnswerBox;
