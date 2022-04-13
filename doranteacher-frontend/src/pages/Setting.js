import React from "react";
import styled, { css, createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import ShakingHands from "../components/ShakingHands";
import GlobalStyle from "../components/GlobalStyle";
const LeftDoran = styled.div``;

function Setting() {
    return (
        <>
            <GlobalStyle backColor="yellow" />
            <Header />
            <LeftDoran>
                <div className="spaceship" />
            </LeftDoran>
        </>
    );
}

export default Setting;
