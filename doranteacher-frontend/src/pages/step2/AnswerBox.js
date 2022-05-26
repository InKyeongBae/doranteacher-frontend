import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Sentence from './Sentence';

function AnswerBox(editable, text, handleChange, handleKeyDown, id, active, changeText, onUpdate) {
	return (
		<div className="answer">
			나의 대답
			{editable ? (
				<>
					<input
						className="onedit"
						id="resizable"
						type="text"
						value={text}
						onChange={(e) => handleChange(e)}
						onKeyDown={handleKeyDown}
					/>
					<div className="trash">
						<FaTrashAlt />
					</div>
				</>
			) : (
				<Sentence
					key={1}
					id={id}
					active={active}
					initText={text}
					changeText={changeText}
					editable={editable}
					onUpdate={onUpdate}
				/>
			)}
		</div>
	);
}

export default AnswerBox;
