import React from 'react';
import SentenceInput from './SentenceInput';
import { useSentenceState } from './SentenceContext';

function Sentence({onUpdate}) {
	const sentences = useSentenceState();
	const active = sentences.filter(sentence => sentence.active);
	const text = active[0].answer;
	const id = active[0].id;
	console.log(sentences);
	return (
		<div className="answer">
			나의 대답 <SentenceInput initText={text} onUpdate={onUpdate} id={id} trash />
		</div>
	);
}

export default Sentence;
