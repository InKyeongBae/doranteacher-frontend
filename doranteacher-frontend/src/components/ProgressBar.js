import styled from 'styled-components';

const MainBlock = styled.div`
	display: flex;
	justify-content: space-between;

	height: 37.5px;
	width: 700px;

	background: #f9de4b;
	outline: 0;
	border: 0;
	margin: auto 5px;
	padding: 5px 25px;
	letter-spacing: 1px;
	font-size: 25px;

	font-family: 'Cafe24Syongsyong';
	font-style: normal;
	letter-spacing: 3px;
	border-radius: 25px;
	border: 2px solid #404040;

	position: relative;

	/* top: 0;
	left: 0; */
	transition: all 0.15s linear 0s;
	position: relative;
	box-shadow: -6px 6px 0 #404040;

	.progressBg {
		margin-top: 10px;
		margin-right: 25px;
		background-color: ${(props) => props.progressColor};
		width: 520px;
		height: 15px;
		display: flex;
		align-items: center;
		border-radius: 20px;
	}

	.progressWidth {
		background-color: white;
		width: ${(props) => props.progressWidth}%;
		height: 100%;
		border: 2px solid black;
		transition: width 1s;
		border-radius: 20px;
	}

	.progressText {
		padding-top: 3px;
		margin-left: 30px;
	}
`;

function ProgressBar({ progressText, progressWidth, progressColor }) {
	return (
		<MainBlock progressWidth={progressWidth} progressColor={progressColor}>
			<div className="progressText">{progressText}</div>
			<div className="progressBg">
				<div className="progressWidth"></div>
			</div>
		</MainBlock>
	);
}

export default ProgressBar;
