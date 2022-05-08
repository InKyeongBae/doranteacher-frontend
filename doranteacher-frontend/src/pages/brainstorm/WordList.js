import React from 'react';
import TextInput from '../../components/TextInput';
import { useWordState } from './WordContext';

function Word({ word, onRemove }) {
	return (
		<div className="wordlist" style={{ display: 'inline-flex' }}>
			<TextInput initText={word.content} />
			<div className="xbutton" onClick={() => onRemove(word.id)}>
				X
			</div>
		</div>
	);
}

function WordList({ onRemove }) {
	const words = useWordState();
	return (
		<div className="words">
			{words.map((word) => (
				<Word word={word} key={word.id} onRemove={onRemove} />
			))}
		</div>
	);
}

export default WordList;
