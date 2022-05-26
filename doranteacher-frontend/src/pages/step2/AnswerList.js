import React from 'react';
import AnswerBox from './AnswerBox';
import { useSentenceState } from './SentenceContext';

function Answer({ sentence, onUpdate }) {
	return (
		<div className="answerlist" id={sentence.id}>
			<AnswerBox initText={sentence.answer} onUpdate={onUpdate} id={sentence.id} />
		</div>
	);
}

function AnswerList({ onRemove, onUpdate }) {
	const answers = useSentenceState();
	return (
		<div className="sentences">
			{answers.map((answer) => (
				<Answer answer={answer} key={answer.id} onUpdate={onUpdate}></Answer>
			))}
		</div>
	);
}

export default AnswerList;
