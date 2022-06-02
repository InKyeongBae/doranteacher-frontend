import React, { useState } from "react";
import styled, { css, createGlobalStyle } from "styled-components";
import Header from "../../components/Header";
import Button from "../../components/Button";
import GlobalStyle from "../../components/GlobalStyle";
import { useNavigate, Link } from "react-router-dom";
import LeftDoran from "../../components/LeftDoran";
import ProgressBar from "../../components/ProgressBar";

const diary_img = "https://i.ytimg.com/vi/L6JTC0t3n9U/maxresdefault.jpg";
const MainBlock = styled.div`
    .buttons {
        margin-top: 30px;
        justify-content: center;
        // margin-right: 200px;
        display: flex;
        align-items: center;
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

    .main {
        display: flex;
        justify-content: flex-end;
    }

    .diary_img {
        cursor: pointer;
        margin-bottom: 85px;
        margin-right: 100px;
        margin-left: 100px;
        // border-radius: 15px;
        // border: 3px solid gray;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
            rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
        width: 190px;
        height: 250px;
        /* padding-left: 60px; */
    }

    .leftSide {
        /* margin-left: 30px; */
        display: inline-flex;
        width: 100%;
        height: 605px;
        justify-content: center;
        align-items: center;
    }

    .centercontent {
        width: 800px;
        overflow: auto;
        white-space: nowrap;
    }
`;
const BigDoran = styled.div`
    .bigDoran {
        margin-top: 50px;
        height: 550px;
    }
`;

function DiaryList() {
    const navigate = useNavigate("");
    const hmm = () => {
        navigate("/diary");
    };
    return (
        <>
            <GlobalStyle backColor="yellow" />
            <Header backColor="yellow" isLogout isSetting />
            <MainBlock>
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
                </div>
                <div className="main">
                    <div className="leftSide">
                        <div className="centercontent">
                            <img
                                className="diary_img"
                                src={diary_img}
                                height="200"
                                width="150"
                                onClick={() => navigate("/diary/1")}
                            />
                            {/*일기 리스트 출력하는 곳*/}
                        </div>
                    </div>
                    {/* <div className="middleSide"></div> */}
                    <div className="rightSide">
                        <BigDoran>
                            <img
                                className="bigDoran"
                                src="/img/big-doran-heart-left.png"
                            />
                        </BigDoran>
                    </div>
                </div>
            </MainBlock>
        </>
    );
}

export default DiaryList;
