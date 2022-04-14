import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../components/Button';
import { loginUser } from '../_actions/user_action';
import styled, { css, createGlobalStyle } from 'styled-components';
import Header from '../components/Header';
import GlobalStyle from '../components/GlobalStyle';

const MainBlock = styled.div`
	background: #f9de4b;
	display: flex;
	justify-content: space-between;
	.leftSide {
		width: 22vw;
	}

	.middleSide {
	}
	.rightSide {
	}
`;

const CenterLogo = styled.div`
	text-align: center;

	img {
		width: 300px;
		padding: 100px 0px 20px 0px;
	}

	.centercontent {
		font-family: 'NeoDunggeunmo';
		font-style: normal;
		font-weight: 400;
		font-size: 25px;
		line-height: 30px;
		padding: 0px 0px 70px 0px;
	}
`;

const LoginUI = styled.div`
	.column {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding: 0px 80px 0px 0px;
	}

	.content {
		font-family: '상상토끼 꽃집막내딸 OTF';
		font-style: normal;
		font-weight: 450;
		font-size: 30px;
		line-height: 25px;
		background: #f9de4b;
		text-align: center;
	}

	.content_button {
		padding: 20px;
		text-align: center;
	}
`;

const BigDoran = styled.div`
	.bigDoran {
		height: 700px;
	}
`;

const Input = styled.input`
	width: 250px;
	padding: 10px;
	margin: 5px 10px 5px 10px;
	background: #f9de4b;
	border-radius: 10px;
	border: 2px solid black;
	&:focus {
		background: white;
	}
`;

const Loginpage = (props) => {
	// redux의 dispatch
	const dispatch = useDispatch();

	// react hook에서 state 사용. 컴포넌트 안에 작성
	const [Username, setId] = useState('');
	const [Password, setPassword] = useState('');

	// handler 함수들
	const onUsernameHandler = (event) => {
		setId(event.currentTarget.value);
	};

	const onPasswordHandler = (event) => {
		setPassword(event.currentTarget.value);
	};

	const onSubmitHandler = (event) => {
		// 태그의 기본 기능으로 리프레쉬 되는 것을 방지.
		event.preventDefault();

		let body = {
			username: Username,
			password: Password,
		};

		// action의 반환값을 dispatch해준다.
		dispatch(loginUser(body)).then((response) => {
			if (response.payload.loginSuccess) {
				props.history.push('/');
			} else {
				alert('Error');
			}
		});
	};

	return (
		<>
			<GlobalStyle backColor="yellow" />
			<Header isIcon isSignup/>
			<MainBlock>
				<div className="leftSide"></div>
				<div className="middleSide">
					<CenterLogo>
						<div className="centerlogo">
							<img className="doranLogo" src="/img/doranlogo.png" />
						</div>
						<div className="centercontent">
							AI 도란쌤과 함께
							<br />
							일기 마스터하기
						</div>
					</CenterLogo>

					<LoginUI>
						<form onSubmit={onSubmitHandler}>
							<div className="loginform">
								<div className="column">
									<label className="content">아이디</label>
									<Input className="input" type="username" value={Username} onChange={onUsernameHandler} />
								</div>
								<div className="column">
									<label className="content">비밀번호</label>
									<Input className="input" type="password" value={Password} onChange={onPasswordHandler} />
								</div>
								<br />
								<Button buttonText="로그인" type="submit" outputColor="red" className="content_button"></Button>
							</div>
						</form>
					</LoginUI>
				</div>
				<div className="rightSide">
					<BigDoran>
						<img className="bigDoran" src="/img/big-doran-heart.png" />
					</BigDoran>
				</div>
			</MainBlock>
		</>
	);
};

export default Loginpage;
