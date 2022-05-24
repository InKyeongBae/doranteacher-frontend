import React, { useState } from "react";
import styled, { css, createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import Button from "../components/Button";
import GlobalStyle from "../components/GlobalStyle";
import { useNavigate, Link } from "react-router-dom";
import LeftDoran from "../components/LeftDoran";
import ProgressBar from "../components/ProgressBar";
import ImageUpload from "../components/ImageUpload";

const MainBlock = styled.div`
    display: flex;
    justify-content: space-between;

    .rightSide {
    }

    .buttons {
        margin-top: 50px;
        margin-left: 380px;
        // margin-right: 200px;
        display: flex;
    }

    .button {
        margin-right: 20px;
        margin-left: 20px;
    }

    .on {
        background: #e75244;
        transition: all 0.1s cubic-bezier(0, 0, 0.7, 1);
        top: 4px;
        left: 3.5px;
        &:before {
            top: -5px;
            left: -4.7px;
        }
    }
`;
const BigDoran = styled.div`
    .bigDoran {
        height: 700px;
    }
`;

function DiaryList() {
    const navigate = useNavigate("");
    return (
        <>
            <GlobalStyle backColor="yellow" />
            <Header isUndo backColor="yellow" />
            <MainBlock>
                <div className="leftSide">
                    <div className="buttons">
                        <div className="button">
                            <Button
                                buttonText="이달의 일기"
                                width="250px"
                                height="50px"
                                extraClassName="on"
                            ></Button>
                        </div>
                        <div className="button">
                            <Button
                                buttonText="책으로 엮어보기"
                                width="250px"
                                height="50px"
                                onClick={() => navigate("/book-list")}
                            ></Button>
                        </div>
                        <div className="diarys">
                            {/* 일기 리스트 출력하는 곳 */}
                        </div>
                    </div>
                </div>
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
