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

const Calendar = styled.div`
    .content {
        font-family: "116angduk_honesty1.5";
        color: white;
        font-weight: lighter;
        font-style: normal;
        font-size: 50px;
        text-align: center;
    }
`;

const Weather = styled.div``;

function getStringDate(date) {
    return date.toISOString().slice(0, 10);
}
function WritingStart() {
    // console.log(getStringDate(new Date()));
    const [date, setDate] = useState(getStringDate(new Date()));
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
            <Calendar>
                <section>
                    <h1 className="content"> 오늘은 </h1>
                    <div className="input-box">
                        <input
                            type="date"
                            value={date}
                            onClick={(e) => setDate(e.target.value)}
                        ></input>
                    </div>
                </section>
            </Calendar>
            <Weather>
                <div></div>
            </Weather>
            <Button
                buttonText="다음"
                type="submit"
                outputColor="purple"
                // height="90px"
                // weight="90px"
                className="button"
                onClick={() => navigate("/writing/first-step")}
            ></Button>
        </>
    );
}

export default WritingStart;
