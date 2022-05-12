import React from 'react';
import TextInput from '../../components/TextInput';
import { useSentenceState } from './SentenceContext';

function Sentence({ sentence, onRemove }) {
	return (
		<div className="sentencelist" style={{ display: 'inline-flex' }}>
			<TextInput initText={sentence.content} />
			<div className="xbutton" onClick={() => onRemove(sentence.id)}>
				X
			</div>
		</div>
	);
}

function SentenceList({ onRemove }) {
	const sentences = useSentenceState();
	return (
		<div className="sentences">
			{sentences.map((sentence) => (
				<Sentence sentence={sentence} key={sentence.id} onRemove={onRemove} />
			))}
		</div>
	);
}

export default SentenceList;
