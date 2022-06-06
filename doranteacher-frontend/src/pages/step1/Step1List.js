import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import ImgButton from '../../components/ImgButton';
import { useSentenceDispatch, useSentenceState } from './SentenceContext';

function Step1List(props) {
	const step1Qs = useSentenceState();
	const dispatch = useSentenceDispatch();
	const active = step1Qs.filter((sentence) => sentence.active);
	const navigate = useNavigate('');
	function onChange(originId, nextId) {
		dispatch({
			type: 'CHANGE_ACTIVE',
			originId: originId,
			nextId: nextId,
		});
	}

	function pagemove() {
		var diaries = '';
		for (var i = 0; i < 5; i++) {
			diaries += ' ';
			diaries += step1Qs[i].answer;
			console.log(step1Qs[i].answer);
		}
		localStorage.setItem('text', diaries);
		navigate('/writing/step1/diary-contents-view');
	}
	
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
						inputColor="green"
						outputColor="purple"
						onClick={
							active[0].answer === ''
								? () => props.prevNotify()
								: () => onChange(step1Qs.id, step1Qs.id - 1)
						}
						style={{ visibility: step1Qs.id === 1 ? 'hidden' : 'show' }}
					/>
					<div className="questioncontent">{step1Qs.question}</div>
					{active[0].id === 5 ? (
						<Button
							inputColor="green"
							outputColor="purple"
							buttonText={'다음'}
							onClick={active[0].answer === '' ? () => props.levelNotify() : () => pagemove()}
						/>
					) : (
						<ImgButton
							next
							inputColor="green"
							outputColor="purple"
							onClick={
								active[0].answer === ''
									? () => props.nextNotify()
									: () => onChange(step1Qs.id, step1Qs.id + 1)
							}
							style={{ visibility: step1Qs.id === 5 ? 'hidden' : 'show' }}
						/>
					)}
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

	return (
		<>
			{step1Qs.map((step1Qs) => (
				<Step1Qs step1Qs={step1Qs} key={step1Qs.id} onChange={onChange} />
			))}
		</>
	);
}

export default Step1List;
