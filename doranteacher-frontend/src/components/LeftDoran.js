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

const context = new AudioContext();
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
				Authorization: `KakaoAK 385ba3ec71547eb9ff85151e5d2834fc`,
			},
			responseType: 'arraybuffer',
		});
		console.log(context);
		return data;
	} catch (e) {
		console.error(e.message);
	}
}

function test() {
	const data = audio[0];
	console.log(audio);
	context.decodeAudioData(data, (buffer) => {
		const source = context.createBufferSource();
		source.buffer = buffer;
		source.connect(context.destination);
		source.start(0);
	});

}

function LeftDoran({ text, brainList }) {
	return (
		<LeftDoranStyle>
			<div className="leftDoran" onClick={() => test()} />
		</LeftDoranStyle>
	);
}

export default LeftDoran;
