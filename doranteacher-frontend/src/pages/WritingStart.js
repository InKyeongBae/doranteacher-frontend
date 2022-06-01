import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../components/Button";
import styled, { css, createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import GlobalStyle from "../components/GlobalStyle";
import WeatherItem from "../components/WeatherItem";
import ProgressBar from "../components/ProgressBar";
import { Link, useNavigate } from "react-router-dom";
import NextButton from "../components/NextButton";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const weatherList = [
    {
        weather_id: 1,
        weather_img: process.env.PUBLIC_URL + `/img/sun.png`,
        weather_description: "화창해요",
    },
    {
        weather_id: 2,
        weather_img: process.env.PUBLIC_URL + `/img/cloud.png`,
        weather_description: "구름이 많아요",
    },
    {
        weather_id: 3,
        weather_img: process.env.PUBLIC_URL + `/img/rain.png`,
        weather_description: "비가 와요",
    },
    {
        weather_id: 4,
        weather_img: process.env.PUBLIC_URL + `/img/snow.png`,
        weather_description: "눈이 내려요",
    },
];
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
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;

    .content {
        font-family: "KOTRAHOPE";
        color: white;
        font-weight: lighter;
        font-style: normal;
        font-size: 50px;
        text-align: center;
        margin-top: 40px;
        margin-bottom: 30px;
    }

    .simpleButton {
        // display:flex;
        // flex-direction: center;
        // align-items:center;

        width: 350px;
        height: 50px;
        background: #f9de4b;
        outline: 0;
        border: 0;
        letter-spacing: 1px;
        position: relative;
        // padding-left: 35px;
        // padding-right: 35px;
        border-radius: 25px;
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
    }

    .input_date {
        border: none;
        background: #f9de4b;

        padding-top: 5px;
        margin-right: 20px;
        margin-left: 20px;

        cursor: pointer;
        font-family: "Cafe24Syongsyong";
        font-size: 30px;
        text-align: center;
    }

    .weatherBlock {
        margin-right: 100px;
        align-self: flex-end;
    }

    .input_box_weather_list_wrapper {
        // width:80%
        margin-top: 10px;
        align-self: flex-end;

        display: flex;
    }

    .button {
        margin-top: 30px;
        margin-right: 35px;
        align-self: flex-end;
    }

    .container {
        margin-top: 50px;
    }
`;

function getStringDate(date) {
    let year = date.getFullYear();

    let month = date.getMonth() + 1;

    let day = date.getDate();

    if (month < 10) {
        month = `0${month}`;
    }

    if (day < 10) {
        day = `0${day}`;
    }

    return `${year}-${month}-${day}`;
    // return date.toISOString().slice(0, 10);
}
function WritingStart() {
    // console.log(getStringDate(new Date()));
    const [weather, setWeather] = useState(1);

    const handleClickWeather = (weather) => {
        setWeather(weather);
    };
    const [date, setDate] = useState(getStringDate(new Date()));
    const navigate = useNavigate("");

    function writeStartNext() {
        localStorage.setItem("date", date);
        var w;
        if (weather === 1) {
            w = "화창해요";
        } else if (weather === 2) {
            w = "구름이 많아요";
        } else if (weather === 3) {
            w = "비가 와요";
        } else {
            w = "눈이 내려요";
        }
        localStorage.setItem("weather", w);
        navigate("/writing/first-step");
    }
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
                        progressWidth={"14"}
                        progressColor={"#E75244"}
                        backColor="red"
                    ></ProgressBar>
                }
            />
            <MainBlock>
                <section className="section">
                    <h1 className="content"> 오늘은 </h1>
                    <div className="input_box">
                        <div className="simpleButton">
                            <div className="input_date">
                                <input
                                    className="input_date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    type="date"
                                ></input>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <h1 className="content"> 오늘 날씨는 어떤가요? </h1>
                </section>

                <div className="wrapper" style={{ marginLeft: "250px" }}>
                    <div className="input_box_weather_list_wrapper">
                        {weatherList.map((it) => (
                            <WeatherItem
                                key={it.weather_id}
                                {...it}
                                onClick={handleClickWeather}
                                isSelected={it.weather_id === weather}
                            />
                        ))}
                    </div>
                    <NextButton onClick={writeStartNext} />
                </div>
            </MainBlock>
        </>
    );
}

export default WritingStart;
