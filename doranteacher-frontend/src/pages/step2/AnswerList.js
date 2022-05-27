import React from 'react';
import AnswerBox from './AnswerBox';
import { useSentenceState } from './SentenceContext';

function Answer({ answer, first, id }) {
	if (answer.id === id) {
		return (
			<div className="answerlist" id={answer.id} style={{ margin: '10px 0' }}>
				<AnswerBox id={answer.id} checkfirst={first} />
			</div>
		);
	} else {
		return (
			<div className="answerlist" id={answer.id} style={{ margin: '10px 0' }}>
				<AnswerBox id={answer.id} checkfirst={false} />
			</div>
		);
	}
}

function AnswerList({ first }) {
	const answers = useSentenceState();
	console.log(answers);
	const active = answers.filter((sentence) => sentence.active);
	const id = active[0].id;

	return (
		<div className="sentences">
			{answers.map((answer) => (
				<Answer answer={answer} key={answer.id} first={first} id={id}></Answer>
			))}
		</div>
	);
}

export default AnswerList;
