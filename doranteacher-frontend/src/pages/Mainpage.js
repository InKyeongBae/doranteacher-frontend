import React, { useState, useEffect } from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';
import Header from '../components/Header';
import ShakingHands from '../components/ShakingHands';
import GlobalStyle from '../components/GlobalStyle';
import { useNavigate, Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const MainBlock = styled.div`
	background: #f9de4b;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: black;
	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
		color: black;
	}
`;

const CenterLogo = styled.div`
	text-align: center;

	img {
		width: 400px;
		padding: 30px 0;
	}

	.centercontent {
		font-family: 'KOTRAHOPE';
		font-style: normal;
		font-weight: 400;
		font-size: 30px;
		line-height: 30px;
	}
`;

const BottomBlock = styled.div`
	position: fixed;
	bottom: 0;

	.block {
		width: 100%;
		display: flex;

		@keyframes block-ani1 {
			11% {
				transform: scale(1);
			}
			22% {
				transform: scale(1.1);
			}
			33% {
				transform: scale(1);
			}
		}

		@keyframes block-ani2 {
			0% {
				transform: scale(1.05);
			}
			44% {
				transform: scale(1.05);
			}
			55% {
				transform: scale(1.15);
			}
			66% {
				transform: scale(1.05);
			}
			100% {
				transform: scale(1.05);
			}
		}

		@keyframes block-ani3 {
			0% {
				transform: scale(1.05);
			}
			77% {
				transform: scale(1.05);
			}
			88% {
				transform: scale(1.15);
			}
			99% {
				transform: scale(1.05);
			}
			100% {
				transform: scale(1.05);
			}
		}

		.imgblock {
			width: 100%;
			height: 100%;
			object-fit: contain;
			object-position: bottom right;
		}

		.imgblock2 {
			width: 100%;
			height: 100%;
			object-fit: contain;
			object-position: bottom right;
			cursor: pointer;
			filter: drop-shadow(5px 5px 4px rgba(0, 0, 0, 0.3));
		}

		#blockani1 {
			animation: block-ani1 2.5s infinite;
		}

		#blockani2 {
			animation: block-ani2 2.5s infinite;
		}

		#blockani3 {
			animation: block-ani3 2.5s infinite;
		}
	}

	.block div:first-child {
		flex: 14;
	}

	.block div:nth-child(2) {
		flex: 5;
	}

	.block div:nth-child(3) {
		flex: 4;
	}

	.block div:nth-child(4) {
		flex: 5;
	}
`;

function Mainpage() {
	const navigate = useNavigate();
	const [cookies] = useCookies(['accessToken']);
	// console.log(cookies.acessToken !== undefined);
	const [isLogin, setIsLogin] = useState(false);

	useEffect(() => {
		if (cookies.accessToken !== undefined) {
			// sessionStorage 에 user_id 라는 key 값으로 저장된 값이 없다면
			console.log('isLogin ??? :: ', isLogin);
			// 로그인 상태 변경
			setIsLogin(true);
		} else {
			// sessionStorage 에 user_id 라는 key 값으로 저장된 값이 있다면
			console.log('isLogin ?? :: ', isLogin);
			setIsLogin(false);
		}

		if(localStorage.getItem('processing')){
			const pId = localStorage.getItem('processing')
			if (pId.length>5){
				return
			}
			axios
			.get('http://api.doranssam.com/diaries/'+pId, {
				headers: {
					Authorization: `Bearer ${cookies['accessToken']}`,
					'Content-type': 'application/json',
				},
			})
			.then((res) => {
				console.log(res.data.results[0]['original_text']);
				// original_text에서 correct_string으로 변경해야 함
				fetch('http://52.78.16.114:8080/recommend', {
					method: 'POST',
					headers: {
						'Content-type': 'application/json',
					},
					body: JSON.stringify({
						text: res.data.results[0]['original_text']
					}),
				})
					.then((response) => response.json())
					.then((res)=>{
						console.log(res['output_url']);
						localStorage.setItem('processing', localStorage.getItem('processing')+"#"+res['output_url']);
						// console.log(res.results&&)
					})
					.then(() => {
						fetch('http://api.doranssam.com/diaries/'+pId, {
							method: 'PATCH',
							headers: {
								'Content-type': 'application/json',
								Authorization: `Bearer ${cookies['accessToken']}`,
							},
							body: JSON.stringify({
								imgStatus: "NEED_ACTION",
							}),
						})
							.then((response) => {
								response.json();
								console.log("patch api 호출 완료")
							})
					});
				
			});
			

			
		}
	}, []);

	function writeStart() {
		axios.defaults.headers.common['Authorization'] = `Bearer ${cookies['accessToken']}`;
		axios
			.get('https://api.doranssam.com/user/me')
			.then((res) => localStorage.setItem('step', res.data.results[0].writingStep))
			.then(() => navigate('/writing/start'));
	}

	const StyledContainer = styled(ToastContainer)`
		&&&.Toastify__toast-container {
			bottom: 80px;
			right: 20px;
		}
		.Toastify__toast {
			font-size: 30px;
		}
		.Toastify__toast-body {
			font-family: 'KOTRAHOPE';
			font-style: normal;
			font-size: 24px;
			color: black;
		}
		.Toastify__progress-bar {
		}
	`;

	const notify = () => {
		toast('🦄 서비스가 준비 중입니다!', {
			position: 'top-center',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	};

	const loginNotify = () => {
		toast.error('로그인 후 이용할 수 있습니다!', {
			position: 'top-center',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	};

	return (
		<>
			<GlobalStyle backColor="yellow" />
			{isLogin ? (
				<Header isIcon isLogout isSetting backColor="yellow" />
			) : (
				<Header isIcon isLogin isSignup backColor="yellow" />
			)}
			<>
				<MainBlock>
					<CenterLogo>
						<div className="centerlogo">
							<img className="doranLogo" src="/img/doranlogo.png" onClick={() => navigate('/')} />
						</div>
						<div className="centercontent">
							AI 도란쌤과 함께
							<br />
							일기 마스터하기
						</div>
					</CenterLogo>
					<BottomBlock>
						<div className="block">
							<div>
								<img className="imgblock" src="/img/block1.png" />
							</div>
							<div>
								<img
									className="imgblock2"
									id="blockani1"
									src="/img/block2.png"
									onClick={() => notify()}
								/>
							</div>

							<div>
								<img className="imgblock" src="/img/block3.png" />
							</div>
							<div>
								<div>
									<img
										className="imgblock2"
										id="blockani2"
										src="/img/block4-1.png"
										onClick={isLogin ? () => navigate('/diary-list') : () => loginNotify()}
									/>
								</div>
								<div>
									<div>
										<img
											className="imgblock2"
											id="blockani3"
											src="/img/block4-2.png"
											onClick={isLogin ? writeStart : () => loginNotify()}
										/>
									</div>
								</div>
							</div>
						</div>
					</BottomBlock>
					<ShakingHands />
				</MainBlock>
				<StyledContainer>
					<ToastContainer />
				</StyledContainer>
			</>
		</>
	);
}

export default Mainpage;
