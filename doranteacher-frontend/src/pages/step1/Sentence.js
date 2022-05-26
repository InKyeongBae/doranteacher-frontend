import React from 'react';
import { useSentenceState } from './SentenceContext';
import { FaTrashAlt } from 'react-icons/fa';

function Sentence(props) {
	const sentences = useSentenceState();
	const active = sentences.filter((sentence) => sentence.active);
	const id = active[0].id;
	const text = active[0].answer;
	const trashText = '';

	return (
		<>
			<div className="offedit" onClick={() => props.changeText()}>
				{text}
			</div>
			<div className="trash">
				<FaTrashAlt
					onClick={() => {
						props.onUpdate(id, trashText);
					}}
				/>
			</div>
		</>
	);
}

export default Sentence;
