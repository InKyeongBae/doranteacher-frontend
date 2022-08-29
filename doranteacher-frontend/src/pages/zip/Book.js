import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Button from '../../components/Button';
import GlobalStyle from '../../components/GlobalStyle';
import { useNavigate } from 'react-router-dom';
import Monthly from './Monthly';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const MainBlock = styled.div`
	.buttons {
		margin-top: 30px;
		justify-content: center;
		// margin-right: 200px;
		display: flex;
		align-items: center;
	}

	.button {
		margin-right: 20px;
		margin-left: 20px;
	}

	.on {
		background: #e75244;
		transition: all 0.1s cubic-bezier(0, 0, 0.7, 1);
		top: 3px;
		left: -3px;
		box-shadow: -3px 3px 0 var(--brown);

		&::after {
			top: 1px;
			left: -2px;
			width: var(--angle);
			height: var(--angle);
		}

		&::before {
			bottom: -2px;
			right: 1px;
			width: var(--angle);
			height: var(--angle);
		}
	}

	.main {
		display: flex;
	}

	.rightSide {
		/* margin-left: 30px; */
		display: inline-flex;
		width: 100%;
		height: 605px;
		justify-content: center;
		align-items: center;
	}

	.centercontent {
		width: 800px;
		overflow: auto;
		white-space: nowrap;
	}
`;
const BigDoran = styled.div`
	.bigDoran {
		margin-top: 50px;
		height: 550px;
	}
`;

const BookStyle = styled.div`
	*,
	*:after,
	*:before {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	* {
		margin: 0;
		padding: 0;
	}

	::before,
	::after {
		content: '';
	}

	html,
	body {
		height: 100%;
		-webkit-font-smoothing: subpixel-antialiased;
	}

	html {
		font-size: 100%;
	}

	body {
		background: #ecf0f1;
		color: #34495e;
		font-family: 'KOTRAHOPE';
		font-weight: 400;
		line-height: 1.2;
	}

	h1,
	p {
		font-family: 'KOTRAHOPE';
	}

	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	a {
		color: #2c3e50;
		text-decoration: none;
	}

	img {
		width: 100%;
		max-width: 100%;
		height: 100%;
	}

	.btn {
		display: inline-block;
		text-transform: uppercase;
		border: 2px solid #2c3e50;
		margin-top: 100px;
		font-family: 'KOTRAHOPE';
		font-size: 1.5em;
		font-weight: 700;
		padding: 0.1em 0.4em;
		text-align: center;
		-webkit-transition: color 0.3s, border-color 0.3s;
		-moz-transition: color 0.3s, border-color 0.3s;
		transition: color 0.3s, border-color 0.3s;
	}

	.btn:hover {
		border-color: #16a085;
		color: #16a085;
	}

	/* basic grid, only for this demo */

	.align {
		clear: both;
		margin: 0 auto 20px;
		width: 100%;
		max-width: 1170px;
		text-align: center;
	}

	.align > li {
		width: 350px;
		min-height: 300px;
		display: inline-block;
		/* margin: 30px 20px 30px 30px; */
		margin: 0px;
		padding: 0 0 0 60px;
		vertical-align: top;
	}

	.book {
		position: relative;
		width: 160px;
		height: 220px;
		-webkit-perspective: 1000px;
		-moz-perspective: 1000px;
		perspective: 1000px;
		-webkit-transform-style: preserve-3d;
		-moz-transform-style: preserve-3d;
		transform-style: preserve-3d;
	}

	/* HARDCOVER FRONT */
	.hardcover-front li:first-child {
		background-color: #eee;
		-webkit-backface-visibility: hidden;
		-moz-backface-visibility: hidden;
		backface-visibility: hidden;
	}

	/* reverse */
	.hardcover-front li:last-child {
		background: #fffbec;
	}

	/* HARDCOVER BACK */
	.hardcover-back li:first-child {
		background: #fffbec;
	}

	/* reverse */
	.hardcover-back li:last-child {
		background: #fffbec;
	}

	.book-spine li:first-child {
		background: #eee;
	}
	.book-spine li:last-child {
		background: #333;
	}

	/* thickness of cover */
	.hardcover-front li:first-child:after,
	.hardcover-front li:first-child:before,
	.hardcover-front li:last-child:after,
	.hardcover-front li:last-child:before,
	.hardcover-back li:first-child:after,
	.hardcover-back li:first-child:before,
	.hardcover-back li:last-child:after,
	.hardcover-back li:last-child:before,
	.book-spine li:first-child:after,
	.book-spine li:first-child:before,
	.book-spine li:last-child:after,
	.book-spine li:last-child:before {
		background: #999;
	}

	/* page */
	.page > li {
		background: -webkit-linear-gradient(left, #e1ddd8 0%, #fffbf6 100%);
		background: -moz-linear-gradient(left, #e1ddd8 0%, #fffbf6 100%);
		background: -ms-linear-gradient(left, #e1ddd8 0%, #fffbf6 100%);
		background: linear-gradient(to right, #e1ddd8 0%, #fffbf6 100%);
		box-shadow: inset 0px -1px 2px rgba(50, 50, 50, 0.1), inset -1px 0px 1px rgba(150, 150, 150, 0.2);
		border-radius: 0px 5px 5px 0px;
	}

	.hardcover-front {
		-webkit-transform: rotateY(-34deg) translateZ(8px);
		-moz-transform: rotateY(-34deg) translateZ(8px);
		transform: rotateY(-34deg) translateZ(8px);
		z-index: 100;
	}

	.hardcover-back {
		-webkit-transform: rotateY(-15deg) translateZ(-8px);
		-moz-transform: rotateY(-15deg) translateZ(-8px);
		transform: rotateY(-15deg) translateZ(-8px);
	}

	.page li:nth-child(1) {
		-webkit-transform: rotateY(-28deg);
		-moz-transform: rotateY(-28deg);
		transform: rotateY(-28deg);
	}

	.page li:nth-child(2) {
		-webkit-transform: rotateY(-30deg);
		-moz-transform: rotateY(-30deg);
		transform: rotateY(-30deg);
	}

	.page li:nth-child(3) {
		-webkit-transform: rotateY(-32deg);
		-moz-transform: rotateY(-32deg);
		transform: rotateY(-32deg);
	}

	.page li:nth-child(4) {
		-webkit-transform: rotateY(-34deg);
		-moz-transform: rotateY(-34deg);
		transform: rotateY(-34deg);
	}

	.page li:nth-child(5) {
		-webkit-transform: rotateY(-36deg);
		-moz-transform: rotateY(-36deg);
		transform: rotateY(-36deg);
	}

	.hardcover-front,
	.hardcover-back,
	.book-spine,
	.hardcover-front li,
	.hardcover-back li,
	.book-spine li {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		-webkit-transform-style: preserve-3d;
		-moz-transform-style: preserve-3d;
		transform-style: preserve-3d;
	}

	.hardcover-front,
	.hardcover-back {
		-webkit-transform-origin: 0% 100%;
		-moz-transform-origin: 0% 100%;
		transform-origin: 0% 100%;
	}

	.hardcover-front {
		-webkit-transition: all 0.8s ease, z-index 0.6s;
		-moz-transition: all 0.8s ease, z-index 0.6s;
		transition: all 0.8s ease, z-index 0.6s;
	}

	/* HARDCOVER front */
	.hardcover-front li:first-child {
		cursor: default;
		-webkit-user-select: none;
		-moz-user-select: none;
		user-select: none;
		-webkit-transform: translateZ(2px);
		-moz-transform: translateZ(2px);
		transform: translateZ(2px);
	}

	.hardcover-front li:last-child {
		-webkit-transform: rotateY(180deg) translateZ(2px);
		-moz-transform: rotateY(180deg) translateZ(2px);
		transform: rotateY(180deg) translateZ(2px);
	}

	/* HARDCOVER back */
	.hardcover-back li:first-child {
		-webkit-transform: translateZ(2px);
		-moz-transform: translateZ(2px);
		transform: translateZ(2px);
	}

	.hardcover-back li:last-child {
		-webkit-transform: translateZ(-2px);
		-moz-transform: translateZ(-2px);
		transform: translateZ(-2px);
	}

	/* thickness of cover */
	.hardcover-front li:first-child:after,
	.hardcover-front li:first-child:before,
	.hardcover-front li:last-child:after,
	.hardcover-front li:last-child:before,
	.hardcover-back li:first-child:after,
	.hardcover-back li:first-child:before,
	.hardcover-back li:last-child:after,
	.hardcover-back li:last-child:before,
	.book-spine li:first-child:after,
	.book-spine li:first-child:before,
	.book-spine li:last-child:after,
	.book-spine li:last-child:before {
		position: absolute;
		top: 0;
		left: 0;
	}

	/* HARDCOVER front */
	.hardcover-front li:first-child::after,
	.hardcover-front li:first-child::before {
		width: 4px;
		height: 100%;
	}

	.hardcover-front li:first-child::after {
		-webkit-transform: rotateY(90deg) translateZ(-2px) translateX(2px);
		-moz-transform: rotateY(90deg) translateZ(-2px) translateX(2px);
		transform: rotateY(90deg) translateZ(-2px) translateX(2px);
	}

	.hardcover-front li:first-child::before {
		-webkit-transform: rotateY(90deg) translateZ(158px) translateX(2px);
		-moz-transform: rotateY(90deg) translateZ(158px) translateX(2px);
		transform: rotateY(90deg) translateZ(158px) translateX(2px);
	}

	.hardcover-front li:last-child::after,
	.hardcover-front li:last-child::before {
		width: 4px;
		height: 160px;
	}

	.hardcover-front li:last-child::after {
		-webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(80px) translateX(-2px) translateY(-78px);
		-moz-transform: rotateX(90deg) rotateZ(90deg) translateZ(80px) translateX(-2px) translateY(-78px);
		transform: rotateX(90deg) rotateZ(90deg) translateZ(80px) translateX(-2px) translateY(-78px);
	}

	.hardcover-front li:last-child::before {
		box-shadow: 0px 0px 30px 5px #333;
		-webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px) translateX(-2px) translateY(-78px);
		-moz-transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px) translateX(-2px) translateY(-78px);
		transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px) translateX(-2px) translateY(-78px);
	}

	/* thickness of cover */

	.hardcover-back li:first-child::after,
	.hardcover-back li:first-child::before {
		width: 4px;
		height: 100%;
	}

	.hardcover-back li:first-child::after {
		-webkit-transform: rotateY(90deg) translateZ(-2px) translateX(2px);
		-moz-transform: rotateY(90deg) translateZ(-2px) translateX(2px);
		transform: rotateY(90deg) translateZ(-2px) translateX(2px);
	}

	.hardcover-back li:first-child::before {
		-webkit-transform: rotateY(90deg) translateZ(158px) translateX(2px);
		-moz-transform: rotateY(90deg) translateZ(158px) translateX(2px);
		transform: rotateY(90deg) translateZ(158px) translateX(2px);
	}

	.hardcover-back li:last-child::after,
	.hardcover-back li:last-child::before {
		width: 4px;
		height: 160px;
	}

	.hardcover-back li:last-child::after {
		-webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(80px) translateX(2px) translateY(-78px);
		-moz-transform: rotateX(90deg) rotateZ(90deg) translateZ(80px) translateX(2px) translateY(-78px);
		transform: rotateX(90deg) rotateZ(90deg) translateZ(80px) translateX(2px) translateY(-78px);
	}

	.hardcover-back li:last-child::before {
		box-shadow: 10px -1px 80px 20px #666;
		-webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px) translateX(2px) translateY(-78px);
		-moz-transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px) translateX(2px) translateY(-78px);
		transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px) translateX(2px) translateY(-78px);
	}

	/* BOOK SPINE */
	.book-spine {
		-webkit-transform: rotateY(60deg) translateX(-5px) translateZ(-12px);
		-moz-transform: rotateY(60deg) translateX(-5px) translateZ(-12px);
		transform: rotateY(60deg) translateX(-5px) translateZ(-12px);
		width: 16px;
		z-index: 0;
	}

	.book-spine li:first-child {
		-webkit-transform: translateZ(2px);
		-moz-transform: translateZ(2px);
		transform: translateZ(2px);
	}

	.book-spine li:last-child {
		-webkit-transform: translateZ(-2px);
		-moz-transform: translateZ(-2px);
		transform: translateZ(-2px);
	}

	/* thickness of book spine */
	.book-spine li:first-child::after,
	.book-spine li:first-child::before {
		width: 4px;
		height: 100%;
	}

	.book-spine li:first-child::after {
		-webkit-transform: rotateY(90deg) translateZ(-2px) translateX(2px);
		-moz-transform: rotateY(90deg) translateZ(-2px) translateX(2px);
		transform: rotateY(90deg) translateZ(-2px) translateX(2px);
	}

	.book-spine li:first-child::before {
		-webkit-transform: rotateY(-90deg) translateZ(-12px);
		-moz-transform: rotateY(-90deg) translateZ(-12px);
		transform: rotateY(-90deg) translateZ(-12px);
	}

	.book-spine li:last-child::after,
	.book-spine li:last-child::before {
		width: 4px;
		height: 16px;
	}

	.book-spine li:last-child::after {
		-webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(8px) translateX(2px) translateY(-6px);
		-moz-transform: rotateX(90deg) rotateZ(90deg) translateZ(8px) translateX(2px) translateY(-6px);
		transform: rotateX(90deg) rotateZ(90deg) translateZ(8px) translateX(2px) translateY(-6px);
	}

	.book-spine li:last-child::before {
		box-shadow: 5px -1px 100px 40px rgba(0, 0, 0, 0.2);
		-webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(-210px) translateX(2px) translateY(-6px);
		-moz-transform: rotateX(90deg) rotateZ(90deg) translateZ(-210px) translateX(2px) translateY(-6px);
		transform: rotateX(90deg) rotateZ(90deg) translateZ(-210px) translateX(2px) translateY(-6px);
	}

	.page,
	.page > li {
		position: absolute;
		top: 0;
		left: 0;
		-webkit-transform-style: preserve-3d;
		-moz-transform-style: preserve-3d;
		transform-style: preserve-3d;
	}

	.page {
		width: 100%;
		height: 98%;
		top: 1%;
		left: 3%;
		z-index: 10;
	}

	.page > li {
		width: 100%;
		height: 100%;
		-webkit-transform-origin: left center;
		-moz-transform-origin: left center;
		transform-origin: left center;
		-webkit-transition-property: transform;
		-moz-transition-property: transform;
		transition-property: transform;
		-webkit-transition-timing-function: ease;
		-moz-transition-timing-function: ease;
		transition-timing-function: ease;
	}

	.page > li:nth-child(1) {
		-webkit-transition-duration: 0.6s;
		-moz-transition-duration: 0.6s;
		transition-duration: 0.6s;
	}

	.page > li:nth-child(2) {
		-webkit-transition-duration: 0.6s;
		-moz-transition-duration: 0.6s;
		transition-duration: 0.6s;
	}

	.page > li:nth-child(3) {
		-webkit-transition-duration: 0.4s;
		-moz-transition-duration: 0.4s;
		transition-duration: 0.4s;
	}

	.page > li:nth-child(4) {
		-webkit-transition-duration: 0.5s;
		-moz-transition-duration: 0.5s;
		transition-duration: 0.5s;
	}

	.page > li:nth-child(5) {
		-webkit-transition-duration: 0.6s;
		-moz-transition-duration: 0.6s;
		transition-duration: 0.6s;
	}

	/**********************************
5. Events
***********************************/

	.book:hover > .hardcover-front {
		-webkit-transform: rotateY(-145deg) translateZ(0);
		-moz-transform: rotateY(-145deg) translateZ(0);
		transform: rotateY(-145deg) translateZ(0);
		z-index: 0;
	}

	.book:hover > .page li:nth-child(1) {
		-webkit-transform: rotateY(-30deg);
		-moz-transform: rotateY(-30deg);
		transform: rotateY(-30deg);
		-webkit-transition-duration: 1.5s;
		-moz-transition-duration: 1.5s;
		transition-duration: 1.5s;
	}

	.book:hover > .page li:nth-child(2) {
		-webkit-transform: rotateY(-35deg);
		-moz-transform: rotateY(-35deg);
		transform: rotateY(-35deg);
		-webkit-transition-duration: 1.8s;
		-moz-transition-duration: 1.8s;
		transition-duration: 1.8s;
	}

	.book:hover > .page li:nth-child(3) {
		-webkit-transform: rotateY(-118deg);
		-moz-transform: rotateY(-118deg);
		transform: rotateY(-118deg);
		-webkit-transition-duration: 1.6s;
		-moz-transition-duration: 1.6s;
		transition-duration: 1.6s;
	}

	.book:hover > .page li:nth-child(4) {
		-webkit-transform: rotateY(-130deg);
		-moz-transform: rotateY(-130deg);
		transform: rotateY(-130deg);
		-webkit-transition-duration: 1.4s;
		-moz-transition-duration: 1.4s;
		transition-duration: 1.4s;
	}

	.book:hover > .page li:nth-child(5) {
		-webkit-transform: rotateY(-140deg);
		-moz-transform: rotateY(-140deg);
		transform: rotateY(-140deg);
		-webkit-transition-duration: 1.2s;
		-moz-transition-duration: 1.2s;
		transition-duration: 1.2s;
	}

	/* COVER CSS */
	.coverDesign {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		overflow: hidden;
		z-index: 1;
		-webkit-backface-visibility: hidden;
		-moz-backface-visibility: hidden;
		backface-visibility: hidden;
	}

	.coverDesign::after {
		background-image: -webkit-linear-gradient(-135deg, rgba(255, 255, 255, 0.45) 0%, transparent 100%);
		background-image: -moz-linear-gradient(-135deg, rgba(255, 255, 255, 0.45) 0%, transparent 100%);
		background-image: linear-gradient(-135deg, rgba(255, 255, 255, 0.45) 0%, transparent 100%);
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
	}

	.coverDesign h1 {
		color: #fff;
		font-size: 2.7em;
		letter-spacing: 0.05em;
		text-align: center;
		margin: 54% 0 0 0;
		text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.1);
	}

	.coverDesign p {
		color: #f8f8f8;
		font-size: 1.8em;
		text-align: center;
		text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.1);
	}

	.yellow {
		background-color: #f1c40f;
		background-image: -webkit-linear-gradient(top, #f1c40f 58%, #e7ba07 0%);
		background-image: -moz-linear-gradient(top, #f1c40f 58%, #e7ba07 0%);
		background-image: linear-gradient(to bottom, #f1c40f 58%, #e7ba07 0%);
	}

	.blue {
		background-color: #3498db;
		background-image: -webkit-linear-gradient(top, #3498db 58%, #2a90d4 0%);
		background-image: -moz-linear-gradient(top, #3498db 58%, #2a90d4 0%);
		background-image: linear-gradient(to bottom, #3498db 58%, #2a90d4 0%);
	}

	.green {
		background-color: #5dcb83;
		background-image: -webkit-linear-gradient(top, #5dcb83 58%, #5dcb83 0%);
		background-image: -moz-linear-gradient(top, #5dcb83 58%, #5dcb83 0%);
		background-image: linear-gradient(to bottom, #5dcb83 58%, #5dcb83 0%);
	}

	.red {
		background-color: #e75244;
		background-image: -webkit-linear-gradient(top, #e75244 58%, #e75244 0%);
		background-image: -moz-linear-gradient(top, #e75244 58%, #e75244 0%);
		background-image: linear-gradient(to bottom, #e75244 58%, #e75244 0%);
	}

	/* Basic ribbon */
	.ribbon {
		background: #c0392b;
		color: #fff;
		display: block;
		font-size: 0.7em;
		position: absolute;
		top: 11px;
		right: 1px;
		width: 40px;
		height: 20px;
		line-height: 20px;
		letter-spacing: 0.15em;
		text-align: center;
		-webkit-transform: rotateZ(45deg) translateZ(1px);
		-moz-transform: rotateZ(45deg) translateZ(1px);
		transform: rotateZ(45deg) translateZ(1px);
		-webkit-backface-visibility: hidden;
		-moz-backface-visibility: hidden;
		backface-visibility: hidden;
		z-index: 10;
	}

	.ribbon::before,
	.ribbon::after {
		position: absolute;
		top: -20px;
		width: 0;
		height: 0;
		border-bottom: 20px solid #c0392b;
		border-top: 20px solid transparent;
	}

	.ribbon::before {
		left: -20px;
		border-left: 20px solid transparent;
	}

	.ribbon::after {
		right: -20px;
		border-right: 20px solid transparent;
	}

	/* Media Queries */
	@media screen and (max-width: 37.8125em) {
		.align > li {
			width: 100%;
			min-height: 440px;
			height: auto;
			padding: 0;
			margin: 0 0 30px 0;
		}

		.book {
			margin: 0 auto;
		}

		figcaption {
			text-align: center;
			width: 320px;
			top: 250px;
			padding-left: 0;
			left: -80px;
			font-size: 90%;
		}
	}

	.diariesnum {
		font-family: 'KOTRAHOPE';
		font-size: 1.8em;
		margin-top: 30px;
		width: 180px;
	}
`;

function Book() {
	const navigate = useNavigate('');

	const [cookies] = useCookies(['acessToken']);
	const [monthNum, setMonthNum] = useState(0);
	const [data, setData] = useState([]);

	const getMonthNum = async () => {
		const types = await axios
			.get(`https://api.doranssam.com/diaries/book/count`, {
				headers: {
					Authorization: `Bearer ${cookies['accessToken']}`,
					'Content-type': 'application/json',
				},
			})
			.then((res) => {
				var r = [];
				for (var i = 0; i < res.data.results.length; i++) {
					const diary = {
						id: i,
						year: res.data.results[i].date.substr(0, 4),
						month: parseInt(res.data.results[i].date.substr(5, 8)),
						diaryNum: res.data.results[i].diaryCount,
						date: res.data.results[i].date,
					};
					r.push(diary);
				}
				setMonthNum(res.data.results.length);
				return r;
			})
			.then((res) => setData(res));
	};

	useEffect(() => {
		getMonthNum();
	}, []);

	return (
		<>
			<GlobalStyle backColor="yellow" />
			<Header backColor="yellow" isLogout />
			<MainBlock>
				<div className="buttons">
					<div className="button">
						<Button
							buttonText="이달의 일기"
							width="250px"
							height="50px"
							onClick={() => navigate('/diary-list')}
						></Button>
					</div>
					<div className="button">
						<Button buttonText="책으로 엮어보기" width="250px" height="50px" extraClassName="on"></Button>
					</div>
				</div>
				<div className="main">
					<div className="leftSide">
						<BigDoran>
							<img className="bigDoran" src="/img/big-doran-heart-right.png" />
						</BigDoran>
					</div>
					<div className="rightSide">
						<div className="centercontent">
							<BookStyle>
								<div className="container">
									<div className="component">
										<ul className="align">
											{data.map((it) =>
												it.id === 0 ? (
													<Monthly
														key={it.id}
														{...it}
														year={it.year}
														month={it.month}
														num={it.diaryNum}
														recent
														bookColor={
															it.id % 4 === 0
																? 'red'
																: it.id % 4 === 1
																? 'blue'
																: it.id % 4 === 2
																? 'green'
																: 'yellow'
														}
														link={'/diary/monthly?yearmonth=' + it.date + '&id=1'}
													/>
												) : (
													<Monthly
														key={it.id}
														{...it}
														year={it.year}
														month={it.month}
														num={it.diaryNum}
														bookColor={
															it.id % 4 === 0
																? 'red'
																: it.id % 4 === 1
																? 'blue'
																: it.id % 4 === 2
																? 'green'
																: 'yellow'
														}
														link={'/diary/monthly?yearmonth=' + it.date + '&id=1'}
													/>
												),
											)}
											{/* <Monthly
												year="2022년"
												month="5월의 일기"
												recent
												bookColor="red"
												link="/diary/3"
												num="3"
											/> */}
										</ul>
									</div>
								</div>
							</BookStyle>
						</div>
					</div>
				</div>
			</MainBlock>
		</>
	);
}

export default Book;
