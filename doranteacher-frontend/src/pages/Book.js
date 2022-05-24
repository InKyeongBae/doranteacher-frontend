import React, { useState } from "react";
import styled, { css, createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import Button from "../components/Button";
import GlobalStyle from "../components/GlobalStyle";
import { useNavigate, Link } from "react-router-dom";
import LeftDoran from "../components/LeftDoran";
import ProgressBar from "../components/ProgressBar";
import ImageUpload from "../components/ImageUpload";

const MainBlock = styled.div``;

const BigDoran = styled.div`
    .bigDoran {
        height: 690px;
    }
`;

function Book() {
    return (
        <>
            <GlobalStyle backColor="yellow" />
            <Header isUndo backColor="yellow" />
            <MainBlock>
                <div className="leftSide">
                    <BigDoran>
                        <img
                            className="bigDoran"
                            src="/img/big-doran-heart-right.png"
                        />
                    </BigDoran>
                </div>
                <div className="middleSide"></div>
                <div className="rightSide"></div>
            </MainBlock>
        </>
    );
}

export default Book;
