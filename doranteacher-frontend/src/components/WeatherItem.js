import React from 'react';
import styled, { css } from 'styled-components';

const WeatherItems = styled.div`
	margin-right: 20px;
	.text {
		font-family: 'Cafe24Syongsyong';
		color: black;
		font-weight: lighter;
		font-style: normal;
		font-size: 22px;
	}
	.weatherItem {
		cursor: pointer;

		border-radius: 25px;

		display: flex;
		flex-direction: column;
		justify: center;
		align-items: center;

		width: 110px;
		height: 150px;
		background: #f9de4b;
		outline: 0;
		border: 0;
		letter-spacing: 1px;
		position: relative;
		padding: 3px 35px;

		border: 2px solid black;
		transition: transform 0.2s cubic-bezier(0, 0, 0.7, 1);

		&:before {
			z-index: -1;
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			content: '';
			width: 100%;
			height: 100%;
			position: absolute;
			background: white;
			transform: translate3d(0.2em, 0.15em, 1em);
			border-radius: 25px;
			border: 2px solid black;
			transition: transform 0.2s cubic-bezier(0, 0, 0.7, 1);
			&:active {
				z-index: -1;
			}
		}

		&:hover {
			background: #5dcb83;
			transition: all 0.1s cubic-bezier(0, 0, 0.7, 1);
			top: 4px;
			left: 3.5px;
			&:before {
				top: -4px;
				left: -4.7px;
			}
		}
	}

	.weatherItem_on {
		background: #5dcb83;
		transition: all 0.1s cubic-bezier(0, 0, 0.7, 1);
		top: 4px;
		left: 3.5px;
		&:before {
			top: -4px;
			left: -4.7px;
		}
	}

	.weather_img {
		padding-top: 20px;
		padding-bottom: 5px;
	}
`;

function WeatherItem({ weather_id, weather_img, weather_description, onClick, isSelected }) {
	return (
		<WeatherItems>
			<div
				onClick={() => onClick(weather_id)}
				className={['weatherItem', isSelected ? `weatherItem_on` : ''].join(' ')}
			>
				<img className="weather_img" src={weather_img} height="80" width="90" />
				<span className="text">{weather_description}</span>
			</div>
		</WeatherItems>
	);
}

export default WeatherItem;
