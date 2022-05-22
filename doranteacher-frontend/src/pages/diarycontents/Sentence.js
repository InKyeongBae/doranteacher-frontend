import React from 'react';
import SentenceInput from './SentenceInput';
import { useSentenceState, useSentenceDispatch } from './SentenceContext';
import { FaTrashAlt } from 'react-icons/fa';

function Sentence() {
	const sentences = useSentenceState();
	const dispatch = useSentenceDispatch();
	const active = sentences.filter((sentence) => sentence.active);
	const text = active[0].answer;
	const id = active[0].id;
	console.log(sentences);
	const trashText = '';
	const onUpdate = (updateid, answer) =>
		dispatch({
			type: 'CHANGE_ANSWER',
			sentence: {
				id: updateid,
				answer: answer,
			},
		});
	return (
		<div className="answer">
			나의 대답
			<div className="offedit">{text}</div>
			<div className="trash">
				<FaTrashAlt
					onClick={() => {
						onUpdate(id, trashText);
					}}
				/>
			</div>
		</div>
	);
}

export default Sentence;
