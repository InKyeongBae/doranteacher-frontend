import React, { useState } from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';
import Header from '../components/Header';
import Button from '../components/Button';
import GlobalStyle from '../components/GlobalStyle';
import { useNavigate, Link } from 'react-router-dom';
import LeftDoran from '../components/LeftDoran';
import ProgressBar from '../components/ProgressBar';
import TypeItem from '../components/TypeItem';
import NextButton from '../components/NextButton';

const typeList = [
	// 서버로부터 데이터를 받아와야함
	{
		id: 1, //id가 곧 유형 순위를 의미함
		type_name: '효도일기',
	},
	{
		id: 2,
		type_name: '요리일기',
	},
	{
		id: 3,
		type_name: '만화일기',
	},
	{
		id: 4,
		type_name: '과학일기',
	},
	{
		id: 5,
		type_name: '추론일기',
	},
	{
		id: 6,
		type_name: '환경일기',
	},
	{
		id: 7,
		type_name: '칭찬일기',
	},
	{
		id: 8,
		type_name: '영화일기',
	},
	{
		id: 9,
		type_name: '신문일기',
	},
	{
		id: 10,
		type_name: '관찰일기',
	},
	{
		id: 11,
		type_name: '체험일기',
	},
	{
		id: 12,
		type_name: '견학일기',
	},
	{
		id: 13,
		type_name: '기행일기',
	},
	{
		id: 14,
		type_name: '사물일기',
	},
	{
		id: 15,
		type_name: '주제일기',
	},
	{
		id: 16,
		type_name: '자유일기',
	},
];
const MainBlock = styled.div`
	.question {
		margin-top: 20px;
		font-family: 'KOTRAHOPE';
		font-style: normal;
		font-weight: 380;
		font-size: 38px;
		line-height: 48px;
		text-align: center;
		margin-bottom: 30px;
	}

	.input_box_diary_list_wrapper {
		padding-left: 25%;
		width: 50%;
		place-items: center;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr 1fr;
		row-gap: 15px;
		column-gap: 20px;
	}

	.nextbutton {
		float: right;
		margin-top: 30px;
		margin-right: 70px;
	}

	.button {
		margin-top: 5px;
	}
	.saveButton {
		margin-top: 15px;
	}

	.container {
		margin-right: 100px;
		margin-top: 50px;
	}
`;

function DiaryType() {
	// console.log(getStringDate(new Date()));
	const [diary, setDiary] = useState(1);

	const handleClickDiary = (diary) => {
		setDiary(diary);
	};

	const navigate = useNavigate('');
	return (
		<>
			<GlobalStyle backColor="red" />
			<LeftDoran />
			<Header
				isProgress
				isLogout
				isImgBtn
				progress={
					<ProgressBar
						progressText={'3.유형선택'}
						progressWidth={'37.5'}
						progressColor={'#E75244'}
						backColor="red"
					></ProgressBar>
				}
			/>
			<MainBlock>
				<div className="question">
					오늘 너에게 딱 맞는
					<br />
					일기 유형을 추천해줄게!
				</div>
				<div className="input_box_diary_list_wrapper">
					{typeList.map((it) => (
						<TypeItem key={it.id} {...it} onClick={handleClickDiary} isSelected={it.id === diary} />
					))}
				</div>
				<NextButton onClick={() => navigate('/writing/step1')} />
			</MainBlock>
		</>
	);
}
export default DiaryType;
