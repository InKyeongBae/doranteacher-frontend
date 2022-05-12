import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../components/Button";
import { signupUser } from "../_actions/user_action";
import styled, { css, createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import GlobalStyle from "../components/GlobalStyle";
import ProgressBar from "../components/ProgressBar";
import { Link, useNavigate } from "react-router-dom";

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

const Calendar = styled.div`

	margin-bottom:20px;
	display:flex;
	flex-direction:column;
	align-items:center;
    .content {
        font-family: "116angduk_honesty1.5";
        color: white;
        font-weight: lighter;
        font-style: normal;
        font-size: 50px;
        text-align: center;
		margin-top: 80px;
		margin-bottom:30px;
    }

    .simpleButton {
		display:flex;
	flex-direction:column;
	align-items:center;

        width: 300px;
        height: 42.5px;
        background: #F9DE4B;
        outline: 0;
        border: 0;
        letter-spacing: 1px;
        position: relative;
        padding: 3px 35px;
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
            width: 98%;
            height: 98%;
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

	.input_date{
		
		border:none;
		background: #F9DE4B;

		padding-top:5px;

		cursor:pointer;
		font-family:"116angduk_honesty1.5";
		font-size:30px;
		text-align:center;
	}
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
                    <div className="input_box">
                        <div className="simpleButton">
                            <input
                                className="input_date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                type="date"
                            ></input>
                        </div>
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

// import React from "react";
// import styled, { css } from "styled-components";

// const ColorStyles = css`
//     ${({ theme, inputColor, height, width }) => {
//         const incolor = theme.palette[inputColor];
//         return css`
//             color: black;
//             background: ${incolor};
//             height: ${height};
//             width: ${width};
//         `;
//     }}
// `;

// const HeaderButtons = styled.div`
//     .button {
//         min-width: 160px;
//         font-size: 25px;
//         height: 42.5px;
//         width: 90px;
//         ${ColorStyles};
//         outline: 0;
//         border: 0;
//         letter-spacing: 1px;
//         // cursor: pointer;
//         position: relative;
//         padding: 3px 35px;
//         font-family: "상상토끼 꽃집막내딸 OTF";
//         font-style: normal;
//         font-weight: 400;
//         border-radius: 25px;
//         border: 2px solid black;
//         transition: transform 0.2s cubic-bezier(0, 0, 0.7, 1);

//         &:before {
//             z-index: -1;
//             position: absolute;
//             top: 0;
//             right: 0;
//             bottom: 0;
//             left: 0;
//             content: "";
//             width: 98%;
//             height: 98%;
//             position: absolute;
//             background: white;
//             transform: translate3d(0.2em, 0.15em, 1em);
//             border-radius: 25px;
//             border: 2px solid black;
//             transition: transform 0.2s cubic-bezier(0, 0, 0.7, 1);
//             &:active {
//                 z-index: -1;
//             }
//         }
//     }
// `;

// function SimpleButton({ buttonText, ...rest }) {
//     return (
//         <HeaderButtons {...rest}>
//             <div className="button">{buttonText}</div>
//         </HeaderButtons>
//     );
// }

// SimpleButton.defaultProps = {
//     inputColor: "yellow",
//     height: "42.5px",
//     width: "90px",
// };

// export default SimpleButton;
