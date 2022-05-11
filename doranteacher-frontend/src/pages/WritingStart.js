import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../components/Button";
import { signupUser } from "../_actions/user_action";
import styled, { css, createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import GlobalStyle from "../components/GlobalStyle";
import ProgressBar from "../components/ProgressBar";
import { Link, useNavigate } from "react-router-dom";

const ColorStyles = css`
    ${({ theme, inputColor, outputColor }) => {
        const incolor = theme.palette[inputColor];
        const outcolor = theme.palette[outputColor];
        return css`
            color: black;
            background: ${incolor};
            &:hover {
                background: ${outcolor};
            }
        `;
    }}
`;
const LeftDoran = styled.div`
    position: fixed;
    bottom: 0;
    padding: 0px 0px 0px 30px;

    .leftDoran {
        width: 200px;
        height: 400px;
        background: url("/img/doranSsam.png") no-repeat 0 0 / auto 400px;
    }
`;

function WritingStart() {
    const navigate = useNavigate("");
    return (
        <>
            <GlobalStyle backColor="red" />
            <LeftDoran>
                <div className="leftDoran" />
            </LeftDoran>
            <Header
                isProgress
                isLogout
                isImgBtn
                progress={
                    <ProgressBar
                        progressText={"1. 일기쓰기"}
                        progressWidth={"12.5"}
                        progressColor={"#E75244"}
                        backColor="red"
                    ></ProgressBar>
                }
            />
            <Button
                buttonText="다음"
                type="submit"
                outputColor="purple"
                height="90px"
                weight="90px"
                className="button"
                onClick={() => navigate("/writing/first-step")}
            ></Button>
            {/* <MainBlock> */}
            {/* <div className="today">오늘은,</div>
                <div className="dateContent">
                    <DateButton>
                        <div className="date">4</div>
                    </DateButton>
                    <div className="content">월</div>
                    <DateButton>
                        <div className="date">15</div>
                    </DateButton>
                    <div className="content">일</div>
                </div>
                <div className="weathercontent">오늘의 날씨는 어떤가요?</div>
                <div className="weatherButtons">
                    <div className="item">
                        <WeatherButton className="sunnyButton">
                            <img className="imgblock" src="/img/sun.png" />
                            <div className="sunnyContent">화창해요</div>
                        </WeatherButton>
                    </div>
                    <div ClassName="item">
                        <WeatherButton className="sunnyButton">
                            <img className="imgblock" src="/img/cloud.png" />

                            <div className="cloudyContent">구름이 많아요</div>
                        </WeatherButton>
                    </div>
                    <div className="item">
                        <WeatherButton className="rainyButton">
                            <img className="imgblock" src="/img/rain.png" />

                            <div className="rainyContent">비가 내려요</div>
                        </WeatherButton>
                    </div>
                    <div ClassName="item">
                        <WeatherButton className="rainyButton">
                            <img className="imgblock" src="/img/snow.png" />

                            <div className="snowyContent">눈이 내려요</div>
                        </WeatherButton>
                    </div>
                </div>
                <div className="nextButton">
                    <Button
                        buttonText="다음"
                        type="submit"
                        outputColor="red"
                        className="button"
                        onClick={() => navigate("/writing/first-step")}
                    ></Button>
                </div> */}
            {/* </MainBlock> */}
        </>
    );
}

export default WritingStart;
