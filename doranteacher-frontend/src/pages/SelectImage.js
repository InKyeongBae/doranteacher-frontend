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
		padding-left: 20%;
		place-items: center;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr;
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

	const { id } = useParams();

	const navigate = useNavigate('');

	if (localStorage.getItem('processing')) {
		const needAction = localStorage.getItem('processing').split('#');
		const testUrl = needAction[1];
		if (id !== needAction[0]) {
			alert('Error! id value different');
		}
		const imgList = [
			// 내가 알아서 크롭해야함
			{
				id: 1, //api 결과로 뒤에 변경하기
				img_url: FILESTACK_URL_1 + testUrl,
			},
			{
				id: 2,
				img_url: FILESTACK_URL_2 + testUrl,
			},
			{
				id: 3,
				img_url: FILESTACK_URL_3 + testUrl,
			},
			{
				id: 4,
				img_url: FILESTACK_URL_4 + testUrl,
			},
		];
		const onSave = (url) => {
			fetch(`https://api.doranssam.com/diaries/${id}`, {
				method: 'PATCH',
				headers: {
					'Content-type': 'application/json',
					Authorization: `Bearer ${cookies['accessToken']}`,
				},
				body: JSON.stringify({
					imgStatus: 'COMPLETE',
					imgUrl: url,
				}),
			})
				.then((response) => response.json())
				.then(() => {
					localStorage.clear();
					navigate(`/diary/${id}`);
				});
		};
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
								{imgList.map((it, index) => (
									<img
										key={index}
										className="img"
										src={it.img_url}
										alt=""
										width="200px"
										height="200px"
										onClick={() => {
											onSave(it.img_url);
										}}
									></img>
								))}
							</div>
						</div>
					</div>
				</MainBlock>
			</>
		);
	}
}

export default SelectImage;
