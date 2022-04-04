import React from 'react';
import styled from 'styled-components';

const ShakeAni = styled.div`
	position: fixed;
	bottom: 0;

	@keyframes spaceship-ani {
		to {
			background-position: -4400px 0;
		}
	}
	.spaceship {
		z-index: 2;
		width: 400px;
		height: 400px;
		background: url('/img/legomove.png') no-repeat 0 0 / auto 400px;
		animation: spaceship-ani 0.7s infinite steps(11);
	}
`;

function ShakingHands() {
	return (
		<ShakeAni>
			<div className="spaceship" />
		</ShakeAni>
	);
}

export default ShakingHands;
