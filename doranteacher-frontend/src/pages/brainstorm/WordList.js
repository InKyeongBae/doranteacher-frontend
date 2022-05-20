import React from 'react';
import TextInput from '../../components/TextInput';
import { useWordState } from './WordContext';

function Word({ word, onRemove, onUpdate}) {
	return (
		<div className="wordlist" id={word.id} style={{ display: 'inline-flex' }}>
			<TextInput initText={word.content} onUpdate={onUpdate} id={word.id}/>
			<div className="xbutton" onClick={() => onRemove(word.id)}>
				X
			</div>
		</div>
	);
}

function WordList({ onRemove, onUpdate }) {
	const words = useWordState();
	return (
		<div className="words">
			{words.map((word) => (
				<Word word={word} key={word.id} onRemove={onRemove} onUpdate={onUpdate}/>
			))}
		</div>
	);
}

export default WordList;
