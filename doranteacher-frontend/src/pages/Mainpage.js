import React from "react";
import styled, {css} from 'styled-components';
import Header from "../components/Header";
import ShakingHands from "../components/ShakingHands";

const MainBlock = styled.div`
	background : #F9DE4B;
`;

const CenterLogo = styled.div`
	text-align: center;

	img {
		width: 400px;
		padding: 30px 0;
	}

	.centercontent {
		font-family: 'NeoDunggeunmo';
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
			11% {transform: scale(1);}
			22% {transform: scale(1.1);}
			33% {transform: scale(1);}
		}

		@keyframes block-ani2 {
			0% {transform: scale(1.05);}
			44% {transform: scale(1.05);}
			55% {transform: scale(1.15);}
			66% {transform: scale(1.05);}
			100% {transform: scale(1.05);}
		}

		@keyframes block-ani3 {
			0% {transform: scale(1.05);}
			77% {transform: scale(1.05);}
			88% {transform: scale(1.15);}
			99% {transform: scale(1.05);}
			100% {transform: scale(1.05);}
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

	.block div:nth-child(4){
		flex: 5;
	}
`;

function Mainpage() {
	return (
		<>
			<Header />
			<MainBlock>
				<CenterLogo>
					<div className="centerlogo"><img className="doranLogo" src="/img/doranlogo.png" /></div>
					<div className="centercontent">AI 도란쌤과 함께<br />일기 마스터하기</div>
				</CenterLogo>
				<BottomBlock>
				<div className="block">
					<div><img className="imgblock" src="/img/block1.png" /></div>
					<div><img className="imgblock2" id="blockani1" src="/img/block2.png" /></div>
					<div><img className="imgblock" src="/img/block3.png" /></div>
					<div>
						<div><img className="imgblock2" id="blockani2" src="/img/block4-1.png" /></div>
						<div><img className="imgblock2" id="blockani3" src="/img/block4-2.png" /></div>
					</div>
				</div>
				</BottomBlock>
				<ShakingHands />
			</MainBlock>
		</>
	);
}

{/* <img className="block1" src="/img/block1.png" /> */}

export default Mainpage;