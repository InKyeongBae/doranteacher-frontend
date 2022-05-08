import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { useWordState } from './WordContext';
import { ToastContainer, toast } from 'react-toastify';

const NextButtonStyle = styled.div`
	position: fixed;
	bottom: 0;
	padding: 0px 0px 50px 970px;
`;

function NextBtn() {
	const StyledContainer = styled(ToastContainer)`
		&&&.Toastify__toast-container {
			bottom: 80px;
			right: 20px;
		}
		.Toastify__toast {
			font-size: 30px;
		}
		.Toastify__toast-body {
			font-family: '상상토끼 꽃집막내딸 OTF';
			font-style: normal;
			font-size: 24px;
			color: black;
		}
		.Toastify__progress-bar {
		}
	`;

	// const words = useWordState();
	// const lenWords = words.length;

	const lessError = () => {
		toast.error('단어가 부족해요!', {
			position: toast.POSITION.BOTTOM_RIGHT,
			autoClose: 3000,
		});
	};

	const muchError = () => {
		toast.error('단어가 너무 많아요!', {
			position: toast.POSITION.BOTTOM_RIGHT,
			autoClose: 3000,
		});
	};

	const navigate = useNavigate('');

	return (
		<>
			<NextButtonStyle>
				<Button
					buttonText="다음"
					type="submit"
					outputColor="red"
					className="button"
					//onClick={lenWords < 5 ? lessError() : lenWords > 10 ? muchError : () => navigate('writing/step1')}
					onClick={lessError}
				></Button>
			</NextButtonStyle>
			<StyledContainer>
				<ToastContainer />
			</StyledContainer>
		</>
	);
}

export default NextBtn;
