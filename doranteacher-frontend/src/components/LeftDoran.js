import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

async function speaking(text) {
	const nowText = text[0].question;
	const xmlData = '<speak>' + nowText + ' 단어로 한 번 적어볼까요?</speak>';
	try {
		// if (context.state === 'running') context.close();
		const { data } = await axios.post('https://kakaoi-newtone-openapi.kakao.com/v1/synthesize', xmlData, {
			headers: {
				'Content-Type': 'application/xml',
				Authorization: `KakaoAK 385ba3ec71547eb9ff85151e5d2834fc`,
			},
			responseType: 'arraybuffer',
		});
		console.log(context.state);
		context.decodeAudioData(data, (buffer) => {
			const source = context.createBufferSource();
			source.buffer = buffer;
			source.connect(context.destination);
			source.start(0);
		});
	} catch (e) {
		console.error(e.message);
	}
}

function LeftDoran({ text }) {
	return (
		<LeftDoranStyle>
			<div className="leftDoran" onClick={() => speaking(text)} />
		</LeftDoranStyle>
	);
}

export default LeftDoran;
