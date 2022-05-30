import React from 'react';
import styled, { css } from 'styled-components';

const BtnStyle = styled.div`
	// Variables
	--black: black;
	--white: gray;
	--gray: white;

	--text-arrow-space: 40px;
	--shaft-width: 20px;
	--newshaft-width: 64px;
	--shaft-thickness: 3px;
	--arrow-head-width: 8px;
	--arrow-head-thickness: 3px;

	// Base

	* {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	html,
	body {
		background: #ffffff;
		height: 100%;
		font-family: 'Cafe24Syongsyong';
		font-size: 40px;
		line-height: 26px;
	}

	.container {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		margin-right: 50px;
		height: 100%;
	}

	ul {
		li {
			margin: 0 0 24px;
		}
	}

	// The Arrow

	.the-arrow {
		width: var(--shaft-width);
		transition: all 0.2s;

		&.-left {
			position: absolute;
			top: 60%;
			left: 0;

			> .shaft {
				width: 0;
				background-color: var(--black);

				&:before,
				&:after {
					width: 0;
					background-color: var(--black);
				}

				&:before {
					transform: rotate(0);
				}

				&:after {
					transform: rotate(0);
				}
			}
		}

		&.-right {
			top: 3px;

			> .shaft {
				width: var(--shaft-width);
				transition-delay: 0.2s;

				&:before,
				&:after {
					width: var(--arrow-head-width);
					transition-delay: 0.3s;
					transition: all 0.5s;
				}

				&:before {
					transform: rotate(40deg);
				}

				&:after {
					transform: rotate(-40deg);
				}
			}
		}

		> .shaft {
			background-color: var(--black);
			display: block;
			height: var(--shaft-thickness);
			position: relative;
			transition: all 0.2s;
			transition-delay: 0;
			will-change: transform;

			&:before,
			&:after {
				background-color: var(--black);
				content: '';
				display: block;
				height: var(--arrow-head-thickness);
				position: absolute;
				top: 0;
				right: 0;
				transition: all 0.2s;
				transition-delay: 0;
			}

			&:before {
				transform-origin: top right;
			}

			&:after {
				transform-origin: bottom right;
			}
		}
	}

	// Animated Arrow Button

	.animated-arrow {
		display: inline-block;
		color: var(--black);
		font-size: 40px;
		font-style: italic;
		text-decoration: none;
		position: relative;
		transition: all 0.2s;
		font-family: 'Cafe24Syongsyong';
		font-style: normal;
		font-weight: 400;

		&:hover {
			color: var(--gray);

			> .the-arrow.-left {
				> .shaft {
					width: var(--newshaft-width);
					transition-delay: 0.1s;
					background-color: var(--gray);

					&:before,
					&:after {
						width: var(--arrow-head-width);
						transition-delay: 0.1s;
						background-color: var(--gray);
					}

					&:before {
						transform: rotate(40deg);
					}

					&:after {
						transform: rotate(-40deg);
					}
				}
			}

			> .main {
				/* transform: translateX(var(--shaft-width) + var(--text-arrow-space));
				transform: translateX(var(--newshaft-width) + var(--text-arrow-space)); */

				transform: translateX(52px);
				transform: translateX(96px);

				> .the-arrow.-right {
					> .shaft {
						width: 0;
						transform: translateX(200%);
						transition-delay: 0;

						&:before,
						&:after {
							width: 0;
							transition-delay: 0;
							transition: all 0.1s;
						}

						&:before {
							transform: rotate(0);
						}

						&:after {
							transform: rotate(0);
						}
					}
				}
			}
		}

		> .main {
			display: flex;
			align-items: center;
			transition: all 0.2s;

			> .text {
				margin: 0 var(--text-arrow-space) 0 0;
				line-height: 1;
			}

			> .the-arrow {
				position: relative;
			}
		}
	}
`;

function NextButton() {
	return (
		<BtnStyle>
			<div class="container">
				<ul style={{ listStyle: 'None' }}>
					<li>
						<a class="animated-arrow" style={{ cursor: 'pointer' }}>
							<span class="the-arrow -left">
								<span class="shaft"></span>
							</span>
							<span class="main">
								<span class="text">다음 단계</span>
								<span class="the-arrow -right">
									<span class="shaft"></span>
								</span>
							</span>
						</a>
					</li>
				</ul>
			</div>
		</BtnStyle>
	);
}

export default NextButton;
