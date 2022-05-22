import React, { useState } from 'react';
import SentenceInput from './SentenceInput';
import { useSentenceState, useSentenceDispatch } from './SentenceContext';
import { FaTrashAlt } from 'react-icons/fa';

function Sentence(props) {
	const sentences = useSentenceState();
	const active = sentences.filter((sentence) => sentence.active);
	const id = active[0].id;
	const text = active[0].answer;
	console.log(props.editable);
	console.log(sentences);

	const trashText = '';

	return (
		<>
			{props.editable ? (
				<>
					<input
						className="onedit"
						id="resizable"
						type="text"
						value={text}
						onChange={(e) => props.handleChange(e)}
						onKeyDown={props.handleKeyDown}
					/>
					<div className="trash">
						<FaTrashAlt />
					</div>
				</>
			) : (
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
					</div>{' '}
				</>
			)}
		</>
	);
}

export default Sentence;
