import React from "react";
import styled from 'styled-components';
import Header from "../components/Header";

const MainBlock = styled.div`
	background : #F9DE4B;
`;

function Mainpage() {
	return (
		<>
			<Header />
			<MainBlock>
				main
			</MainBlock>
		</>
	);
}

export default Mainpage;