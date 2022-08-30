import React, { useState, useEffect } from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';
import Header from '../components/Header';
import Button from '../components/Button';
import GlobalStyle from '../components/GlobalStyle';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { useNavigate, Link, Navigate, useParams, useLocation } from 'react-router-dom';
import LeftDoran from '../components/LeftDoran';
import ProgressBar from '../components/ProgressBar';
import { ToastContainer, toast } from 'react-toastify';
import NextButton from '../components/NextButton';

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || '';
const FILESTACK_URL_1 = 'https://cdn.filestackcontent.com/A5pMc1jZ2SoSgAq6fJlEPz/crop=dim:[0,0,256,256]/';
const FILESTACK_URL_2 = 'https://cdn.filestackcontent.com/A5pMc1jZ2SoSgAq6fJlEPz/crop=dim:[0,256,256,256]/';
const FILESTACK_URL_3 = 'https://cdn.filestackcontent.com/A5pMc1jZ2SoSgAq6fJlEPz/crop=dim:[256,0,256,256]/';
const FILESTACK_URL_4 = 'https://cdn.filestackcontent.com/A5pMc1jZ2SoSgAq6fJlEPz/crop=dim:[256,256,256,256]/';

const imgList = [
	// 내가 알아서 크롭해야함
	{
		id: 1, //api 결과로 뒤에 변경하기
		img_url: FILESTACK_URL_1 + `/img/image_recommend/hamburger_1.png`,
	},
	{
		id: 2,
		img_url: FILESTACK_URL_2 + `/img/image_recommend/hamburger_2.png`,
	},
	{
		id: 3,
		img_url: FILESTACK_URL_3 + `/img/image_recommend/hamburger_3.png`,
	},
	{
		id: 4,
		img_url: FILESTACK_URL_4 + `/img/image_recommend/hamburger_4.png`,
	}
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

	.input_box_img_list_wrapper {
		padding-left: 3%;
		// width: 50%;
		place-items: center;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		row-gap: 15px;
		column-gap: 20px;
	}

	.whitebox {
		display: flex;
		// flex-direction: column;
		align-items: center;
		// padding-top: 20px;

		width: 700px;
		height: 450px;
		z-index: 1;
		background: white;
		outline: 0;
		border: 0;
		letter-spacing: 1px;
		position: relative;

		border-radius: 25px;
		border: 2px solid black;
		transition: transform 0.2s cubic-bezier(0, 0, 0.7, 1);
	}

	.content-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.button-wrapper {
		align-self: flex-end;
		margin-right: 40px;
		margin-bottom: 20px;
	}

	.cropped {
		width: 260px;
		height: 260px;
		// object-fit: cover;
		overflow: hidden;
	}

	// .cropped img {
	//     margin-top: -270px;
	//     margin-bottom: -270px;
	//     margin-left: 0px;
	//     margin-right: 0px;
	// }

	.img {
		cursor: pointer;
	}
`;

function SelectImage() {
	const [cookies] = useCookies(['acessToken']);
	const [data, setData] = useState([]);
	const [imgId, setImgId] = useState(null);
	const { id } = useParams();
	// console.log(imgId);
	const selectImage = () => {
		axios
			.get(`https://api.doranssam.com/images/recommend?diaryId=${id}`, {
				headers: {
					Authorization: `Bearer ${cookies['accessToken']}`,
					'Content-type': 'application/json',
				},
			})
			.then((res) => {
				console.log(res.data.results);
				setData(res.data.results);
			});
	};

	useEffect(() => {
		selectImage();
	}, []);

	// const handleClickWeather = (weather) => {
	// 	setWeather(weather);
	// };

	const saveImage = (imgId) => {
		console.log(id);
		console.log(imgId);
		fetch('https://api.doranssam.com/images/recommend', {
			method: 'PATCH',
			headers: {
				'Content-type': 'application/json',
				Authorization: `Bearer ${cookies['accessToken']}`,
			},
			body: JSON.stringify({
				diaryId: id,
				selectedImgId: imgId,
			}),
		})
			.then((response) => response.json())
			.then(() => {
				navigate(`/diary/${id}`);
			});
	};

	// imgList.map((it) => console.log(it.id));
	const navigate = useNavigate('');

	return (
		<>
			<GlobalStyle backColor="yellow" />
			<LeftDoran>
				<div className="leftDoran" />
			</LeftDoran>
			<Header isProgress isLogout isImgBtn />
			<MainBlock>
				<div className="question">
					일기 내용과 가장 어울리는
					<br />
					그림을 선택해봐 !
				</div>
				<div className="content-wrapper">
					<div className="whitebox">
						<div className="input_box_img_list_wrapper">
							{data.map((it, index) => (
								<img
									key={index}
									className="img"
									src={it.imgUrl}
									alt=""
									width="150px"
									// onClick={saveImage}
									onClick={() => {
										setImgId(it.imgId);
										saveImage(it.imgId);
									}}
									// onClick={() => saveImage(it.imgID)}
								></img>
							))}
						</div>
					</div>
				</div>
			</MainBlock>
		</>
	);
}

export default SelectImage;
