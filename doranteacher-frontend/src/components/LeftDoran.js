import React from 'react';
import styled from 'styled-components';

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

function LeftDoran() {
	return (
		<LeftDoranStyle>
			<div className="leftDoran" />
		</LeftDoranStyle>
	);
}

export default LeftDoran;
