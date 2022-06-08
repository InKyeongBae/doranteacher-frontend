import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import axios from 'axios';
import GlobalStyle from '../components/GlobalStyle';
import { useNavigate } from 'react-router-dom';
import LeftDoran from '../components/LeftDoran';
import ProgressBar from '../components/ProgressBar';
import TypeItem from '../components/TypeItem';
import NextButton from '../components/NextButton';
import { useCookies } from 'react-cookie';

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || '';

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
	const [cookies] = useCookies(['acessToken']);
	const words = localStorage.getItem('apiKeywords');
	const [typeList, setTypeList] = useState([]);

	const getTypes = async () => {
		const types = await axios.get(`http://3.39.158.98:8080/diary-types/recommend?keywords=${words}`, {
			headers: {
				Authorization: `Bearer ${cookies['accessToken']}`,
				'Content-type': 'application/json',
			},
		});
		setTypeList(types.data.results);
	};

	const handleClickDiary = (diary) => {
		setDiary(diary);
	};

	useEffect(() => {
		getTypes();
	}, []);

	const navigate = useNavigate('');

	function nextStep() {
		localStorage.setItem('diaryType', typeList[diary - 1].diaryType);
		console.log(localStorage.getItem('step'));
		if (localStorage.getItem('step') == 1) {
			navigate('/writing/step1');
		} else {
			navigate('/writing/step2');
		}
	}
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
						progressWidth={'42'}
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
				<NextButton onClick={nextStep} />
			</MainBlock>
		</>
	);
}
export default DiaryType;
