import React from 'react';
import ImgButton from '../components/ImgButton';
import Paint from '../components/Paint';

function BrainstormQs({ brainstormQs, onChange }) {
	return (
		<div
			className="question"
			style={{
				display: brainstormQs.active ? 'block' : 'none',
			}}
		>
			<div className="centercontent">
				<ImgButton prev onClick={() => onChange(brainstormQs.id, brainstormQs.id - 1)} />
				<div>
					{brainstormQs.question}
					<br />
					단어로 한 번 적어볼까요?
				</div>
				<ImgButton next onClick={() => onChange(brainstormQs.id, brainstormQs.id + 1)} />
			</div>
			<div className="paint">
				<Paint />
			</div>
		</div>
	);
}

function BrainstormList({ brainstormQs, onChange  }) {
	return (
		<>
			{brainstormQs.map((brainstormQs) => (
				<BrainstormQs brainstormQs={brainstormQs} key={brainstormQs.id} onChange={onChange}/>
			))}
		</>
	);
}

export default BrainstormList;
