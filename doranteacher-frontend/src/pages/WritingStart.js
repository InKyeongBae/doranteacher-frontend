import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../components/Button";
import { signupUser } from "../_actions/user_action";
import styled, { css, createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import GlobalStyle from "../components/GlobalStyle";
import { Link, useNavigate } from "react-router-dom";

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
        color: black;
    }
`;

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

const MainBlock = styled.div`
    font-family: "NeoDunggeunmo";
    font-style: normal;
    font-weight: 380;
    font-size: 38px;
    text-align: center;

    .today {
        padding-top: 50px;
        padding-bottom: 20px;
        line-height: 48px;
        font-size: 50px;
    }

    .date {
        padding-top: 20px;
        font-size: 50px;
    }

    .dateContent {
        display: flex;
        justify-content: center;
        font-size: 50px;
    }

    .content {
        padding-top: 25px;
        padding-left: 10px;
    }
    .weathercontent {
        padding-top: 60px;
        line-height: 51px;
        font-size: 50px;
        color: white;
    }

    .weatherButtons {
        line-height: 30px;
        display: flex;
        justify-content: right;
        font-size: 25px;
        margin: 40px 110px 10px 10px;
    }

    .imgblock {
        width: 120px;
        height: 120px;
    }

    .item {
        margin: 0px 10px;
    }

    .nextButton {
        display: flex;
        justify-content: flex-end;
        Button {
            margin: 40px 110px 10px 10px;
            text-align: center;
        }
    }
`;

const WeatherButton = styled.div`
    min-width: 120px;
    font-size: 25px;
    height: 180px;
    outline: 0;
    border: 0;
    background: #f9de4b;
    letter-spacing: 1px;
    cursor: pointer;
    position: relative;
    padding: 3px 35px;
    font-family: "상상토끼 꽃집막내딸 OTF";
    font-style: normal;
    font-weight: 400;
    border-radius: 35px;
    border: 2px solid black;
    transition: transform 0.2s cubic-bezier(0, 0, 0.7, 1);

    &:before {
        z-index: -1;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        content: "";
        width: 98%;
        height: 98%;
        position: absolute;
        background: white;
        transform: translate3d(0.2em, 0.15em, 1em);
        border-radius: 35px;
        border: 2px solid black;
        transition: transform 0.2s cubic-bezier(0, 0, 0.7, 1);
        &:active {
            z-index: -1;
        }
    }

    &:hover {
        transition: all 0.1s cubic-bezier(0, 0, 0.7, 1);
        top: 4px;
        left: 3.5px;
        &:before {
            top: -5.5px;
            left: -4.7px;
        }
    }
`;

const DateButton = styled.div`
    min-width: 90px;
    font-size: 25px;
    height: 100px;
    outline: 0;
    border: 0;
    background: #f9de4b;
    letter-spacing: 1px;
    cursor: pointer;
    position: relative;
    padding: 3px 35px;
    font-family: "상상토끼 꽃집막내딸 OTF";
    font-style: normal;
    font-weight: 400;
    border-radius: 35px;
    border: 2px solid black;
    transition: transform 0.2s cubic-bezier(0, 0, 0.7, 1);

    &:before {
        z-index: -1;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        content: "";
        width: 98%;
        height: 98%;
        position: absolute;
        background: white;
        transform: translate3d(0.2em, 0.15em, 1em);
        border-radius: 35px;
        border: 2px solid black;
        transition: transform 0.2s cubic-bezier(0, 0, 0.7, 1);
        &:active {
            z-index: -1;
        }
    }

    &:hover {
        transition: all 0.1s cubic-bezier(0, 0, 0.7, 1);
        top: 4px;
        left: 3.5px;
        &:before {
            top: -5.5px;
            left: -4.7px;
        }
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
            <Header isProgress isLogout isImgBtn />
            <MainBlock>
                <div className="today">오늘은,</div>
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
                </div>
            </MainBlock>
        </>
    );
}

export default WritingStart;
