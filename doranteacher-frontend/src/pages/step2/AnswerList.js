import React from 'react';
import AnswerBox from './AnswerBox';
import { useSentenceState } from './SentenceContext';

function Answer({ answer, onUpdate }) {
	console.log(answer);
	return (
		<div className="answerlist" id={answer.id}>
			<AnswerBox initText={answer.answer} onUpdate={onUpdate} id={answer.id} />
		</div>
	);
}

function AnswerList({ onRemove, onUpdate }) {
	const answers = useSentenceState();
	console.log(answers);
	return (
		<div className="sentences">
			{answers.map((answer) => (
				<Answer answer={answer} key={answer.id} onUpdate={onUpdate}></Answer>
			))}
		</div>
	);
}

export default AnswerList;
