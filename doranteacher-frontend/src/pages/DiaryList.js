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
        height: 700px;
    }
`;

function DiaryList() {
    return (
        <>
            <GlobalStyle backColor="yellow" />
            <Header isUndo backColor="yellow" />
            <MainBlock>
                <div className="leftSide"></div>
                <div className="middleSide"></div>
                <div className="rightSide">
                    <BigDoran>
                        <img
                            className="bigDoran"
                            src="/img/big-doran-heart-left.png"
                        />
                    </BigDoran>
                </div>
            </MainBlock>
        </>
    );
}

export default DiaryList;
