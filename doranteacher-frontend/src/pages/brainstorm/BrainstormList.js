import React from 'react';
import styled from 'styled-components';
import ImgButton from '../../components/ImgButton';
import { useWordState } from './WordContext';

const WordCountStyle = styled.div`
	.word-count {
		font-family: '상상토끼 꽃집막내딸 OTF';
		font-style: normal;
		font-weight: 350;
		line-height: 35px;
		margin-left: 10px;
		font-size: 28px;
		background-color: white;
		padding: 3px 13px;
		font-weight: 500;
		box-sizing: border-box;
		border-radius: 30px;
	}
`;

function BrainstormList({ brainstormQs, onChange }) {
	function BrainstormQs({ brainstormQs, onChange }) {
		const words = useWordState();
		const lenWords = words.length;

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
				<div className="explain-text" style={{ textAlign: 'center' }}>
					<div className="description" style={{ display: 'inline-block' }}>
						단어는 총 5개 이상 10개 이하가 필요해요
					</div>
					<WordCountStyle style={{ display: 'inline-block' }}>
						<div className="word-count" style={lenWords >= 5 && lenWords <= 10 ? {color : "green" } :  {color : "#e75244" }}>
							현재 {lenWords}개
						</div>
					</WordCountStyle>
				</div>
				<br />
			</div>
		);
	}

	return (
		<>
			{brainstormQs.map((brainstormQs) => (
				<BrainstormQs brainstormQs={brainstormQs} key={brainstormQs.id} onChange={onChange} />
			))}
		</>
	);
}

export default BrainstormList;
