import React from 'react';
import SentenceInput from './SentenceInput';
import { useSentenceState } from './SentenceContext';
import { FaTrashAlt } from 'react-icons/fa';

function Sentence({ onUpdate }) {
	const sentences = useSentenceState();
	const active = sentences.filter((sentence) => sentence.active);
	const text = active[0].answer;
	const id = active[0].id;
	console.log(sentences);
	return (
		<div className="answer">
			나의 대답
			<div className="offedit">
				<div className="text">{text}</div>
				{
					<div className="trash">
						<FaTrashAlt />
					</div>
				}
			</div>
		</div>
	);
}

export default Sentence;
