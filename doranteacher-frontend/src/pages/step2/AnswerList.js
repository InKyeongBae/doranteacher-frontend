import React from 'react';
import AnswerBox from './AnswerBox';
import { useSentenceState } from './SentenceContext';

function Answer({ answer }) {
	console.log(answer);
	return (
		<div className="answerlist" id={answer.id} style={{ margin: '10px 0' }}>
			<AnswerBox initText={answer.answer} id={answer.id} />
		</div>
	);
}

function AnswerList() {
	const answers = useSentenceState();
	console.log(answers);
	return (
		<div className="sentences">
			{answers.map((answer) => (
				<Answer answer={answer} key={answer.id}></Answer>
			))}
		</div>
	);
}

export default AnswerList;
