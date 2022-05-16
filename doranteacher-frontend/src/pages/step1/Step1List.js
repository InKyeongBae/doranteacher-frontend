import React, { useMemo } from 'react';
import styled from 'styled-components';
import ImgButton from '../../components/ImgButton';
import { useSentenceState } from '../diarycontents/SentenceContext';

const SentenceCountStyle = styled.div`
	.sentence-count {
		font-family: 'Cafe24Syongsyong';
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

function Step1List({ step1Qs, onChange, countSentences }) {
	const sentences = useSentenceState();
	const lenSentences = sentences.length;

	function Step1Qs({ step1Qs, onChange }) {
		return (
			<div
				className="question"
				style={{
					display: step1Qs.active ? 'block' : 'none',
				}}
			>
				<div className="centercontent">
					<ImgButton
						prev
						inputColor="green" outputColor="purple"
						onClick={() => onChange(step1Qs.id, step1Qs.id - 1)}
						style={{ visibility: step1Qs.id === 1 ? 'hidden' : 'show' }}
					/>
					<div className="questioncontent">
						{step1Qs.question}
					</div>
					<ImgButton
						next
						inputColor="green" outputColor="purple"
						onClick={() => onChange(step1Qs.id, step1Qs.id + 1)}
						style={{ visibility: step1Qs.id === 5 ? 'hidden' : 'show' }}
					/>
				</div>
				<div className="explain-text" style={{ textAlign: 'center' }}>
					<div className="description" style={{ display: 'inline-block' }}>
						일기를 쓰는 단계이니 완전한 한 문장으로 대답해 보아요!
					</div>
				</div>
				<br />
			</div>
		);
	}

	useMemo(() => countSentences(lenSentences), [lenSentences]);

	return (
		<>
			{step1Qs.map((step1Qs) => (
				<Step1Qs step1Qs={step1Qs} key={step1Qs.id} onChange={onChange} />
			))}
		</>
	);
}

export default Step1List;
