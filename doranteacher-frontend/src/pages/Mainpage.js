import React from "react";
import styled from 'styled-components';
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
		}
	}

	.block div:nth-child(4){
		flex: 5;
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
					<div className="block1"><img className="imgblock" src="/img/block1.png" /></div>
					<div className="block2"><img className="imgblock" src="/img/block2.png" /></div>
					<div className="block3"><img className="imgblock" src="/img/block3.png" /></div>
					<div className="block4">
						<div><img className="imgblock2" src="/img/block4-1.png" /></div>
						<div><img className="imgblock2" src="/img/block4-2.png" /></div>
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