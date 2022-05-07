import React from 'react';
import ImgButton from '../components/ImgButton';

function BrainstormQs({ brainstormQs, onChange }) {
	return (
		<div
			className="question"
			style={{
				display: brainstormQs.active ? 'block' : 'none',
			}}
		>
			<div className="centercontent">
				<ImgButton
					prev
					onClick={() => onChange(brainstormQs.id, brainstormQs.id - 1)}
					style={{ visibility: brainstormQs.id === 1 ? 'hidden' : 'show' }}
				/>
				<div className="questioncontent">
					{brainstormQs.question}
					<br />
					단어로 한 번 적어볼까요?
				</div>
				<ImgButton
					next
					onClick={() => onChange(brainstormQs.id, brainstormQs.id + 1)}
					style={{ visibility: brainstormQs.id === 10 ? 'hidden' : 'show' }}
				/>
			</div>
			<div className="explain-text" style={{ textAlign : "center"}}>
				<div className="description" style={{display : "inline-block"}}>단어는 총 5개 이상 10개 이하가 필요해요</div>
				<div className="word-count" style={{display : "inline-block"}}>   현재 @개</div>
			</div>
			<br />
		</div>
	);
}

function BrainstormList({ brainstormQs, onChange }) {
	return (
		<>
			{brainstormQs.map((brainstormQs) => (
				<BrainstormQs brainstormQs={brainstormQs} key={brainstormQs.id} onChange={onChange} />
			))}
		</>
	);
}

export default BrainstormList;
