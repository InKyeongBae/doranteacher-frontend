import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { element } from 'prop-types';

const LeftDoranStyle = styled.div`
	position: fixed;
	bottom: 0;
	padding: 0px 0px 0px 30px;

	.leftDoran {
		width: 200px;
		height: 400px;
		background: url('/img/doranSsam.png') no-repeat 0 0 / auto 400px;
	}
`;

const question = [
	'오늘 일기로 쓰고 싶은 일이 있었나요?',
	'오늘 아침을 생각하면 무엇이 가장 떠오르나요?',
	'오늘 점심을 생각하면 무엇이 가장 떠오르나요?',
];
const audio = [];
question.forEach(function (element) {
	speaking(element)
		.then((a) => {
			return a;
		})
		.then((a) => audio.push(a));
});

async function speaking(text) {
	// const nowText = text[0].question;
	const xmlData = '<speak>' + text + ' 단어로 한 번 적어볼까요?</speak>';
	try {
		// if (context.state === 'running') context.close();
		const { data } = await axios.post('https://kakaoi-newtone-openapi.kakao.com/v1/synthesize', xmlData, {
			headers: {
				'Content-Type': 'application/xml',
				Authorization: `KakaoAK 50c30d38065fda8152de2d9db041939a`,
			},
			responseType: 'arraybuffer',
		});
		console.log("!!!");
		return data;
	} catch (e) {
		console.error(e.message);
	}
}

const context = [];
var step;
for(step = 0; step < 3; step++) {
	context.push(new AudioContext());
}

function test(text) {
	const nowId = text[0].id - 1;
	const data = audio[nowId];
	
	var step;
	for(step = 0; step < 3; step++) {
		if (context[step].state === 'running') context[step].close();
	}

	context[nowId].decodeAudioData(data, (buffer) => {
		const source = context[nowId].createBufferSource();
		source.buffer = buffer;
		source.connect(context[nowId].destination);
		source.start(0);
	});
	console.log(nowId);
	// console.log(context);
	// console.log(context[nowId]);
	// console.log(context[nowId].state);
	// console.log(context[nowId - 1].state)
}

function LeftDoran({ text }) {
	return (
		<LeftDoranStyle>
			<div className="leftDoran" onClick={() => test(text)} />
		</LeftDoranStyle>
	);
}

export default LeftDoran;
