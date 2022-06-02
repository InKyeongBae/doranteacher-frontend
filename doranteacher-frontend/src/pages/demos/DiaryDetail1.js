import React, { useState, useEffect } from "react";
import styled, { css, createGlobalStyle } from "styled-components";
import Header from "../../components/Header";
import Button from "../../components/Button";
import GlobalStyle from "../../components/GlobalStyle";
import { Helmet } from "react-helmet";
import { TypeHangul } from "type-hangul";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";
// const diary_img = process.env.PUBLIC_URL + `/img/diary_img.jpeg`;
const diary_img = "https://i.ytimg.com/vi/L6JTC0t3n9U/maxresdefault.jpg";
const doran_img = process.env.PUBLIC_URL + `/img/doran_half_1.png`;

const dummyData =
    // 서버로부터 데이터를 받아와야함
    {
        weather: "구름이 많아요",
        date: "2022년 06월 01일",
        diaryType: "시청일기",
        keywords: ["#영화", "#마법", "#신호등", "#자동차", "#가족"],
        // 키워드도 json 배열 형태로 넘겨와야함
        title: "닥터스트레인지 별이 다섯 개",
        text: "영화 닥터스트레인지를 봤다. 이 영화가 개봉하는 날만 계속 기다렸다. 주인공이 마법을 하는데 화려한 기술이 정말 멋있었다. 영화를 보면서 나도 마법을 할 수 있는 상상을 했다. 닥터스트레인지는 기대만큼 재미있었다. 별점 만점이다.",
        before_text:
            "영화 닥터스트레인지를 봤다. 이 영화가 개봉 하는 날만 계속 기다려따. 주인공이 마법을 하는데 화려한 기술이 정말 멋있었다. 영화를 보면서 나도 마법을 할 수 있는 상상을 했다. 닥터스트레인지는 기대 만큼 재미있었다. 별점 만점이다.",
        isPrivate: true,
        comment: "시간 가는 줄 모르겠어요",
        wantToCorrect: true,
        hasImage: true,
        // imagePath: "",
        // // 이미지 경로도 있어야함
    };

const MainBlock = styled.div`
    .main-wrapper {
        display: flex;
    }

    .leftside {
        display: flex;
        width: 650px;
        flex-direction: column;
    }
    .mini-header-wrapper {
        margin-top: 10px;
        display: flex;
    }

    .diaryType_button {
        cursor: default;
        pointer-events: none;
        padding-right: 10px;
        padding-left: 10px;
        margin-right: 5px;
        margin-left: 30px;
    }

    .keywords-wrapper {
        display: flex;
    }
    .keyword_button {
        font-size: 20px;
        cursor: default;
        pointer-events: none;
        padding-right: 3px;
        padding-left: 3px;
        margin-right: 5px;
        margin-left: 5px;
    }

    .diarycontents {
        position: relative;
        margin-top: 30px;
        margin-left: 20px;
        margin-right: 20px;
    }

    .correct_button {
        position: absolute;
        cursor: pointer;
        top: 2%;
        left: 70%;
        z-index: 1;
        font-size: 20px;
        line-height: 30px;
        height: 30px;
        border: 0;
        letter-spacing: 1px;
        cursor: pointer;
        padding: 0px 30px;
        font-family: "Cafe24Syongsyong";
        font-style: normal;
        font-weight: 400;
        border-radius: 25px;
        border: 2px solid black;
    }
    .correct_button_on {
        background-color: #d3d3d3;
        color: #e75244;
        border: 3px solid #e75244;
    }
    .contents-box {
        background-color: white;
        border-radius: 15px;
        display: flex;
        // align-items: center;
        align-self: flex-end;

        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
            rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    }

    .answers {
        padding: 40px;
        align-self: flex-end;
    }
    .answer {
        font-family: "Cafe24Syongsyong";
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 40px;
        word-wrap: break-word;
        /* padding: 7px 0; */
        text-decoration: underline;
        text-underline-offset: 17px;
        text-decoration-thickness: 2px;
        line-height: 60px;
        border-bottom: 2px solid black;
    }
    .content {
        font-family: "KOTRAHOPE";
        font-size: 35px;
        text-align: center;
    }

    .rightside {
        display: flex;
        flex-direction: column;
        margin-right: 25px;
    }
    .comment_button {
        font-size: 30px;
        color: white;
        margin-right: 25px;
        cursor: default;
        pointer-events: none;
        border-radius: 30px;
    }
    .comment-wrapper {
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .on {
        background: #e75244;
        transition: all 0.1s cubic-bezier(0, 0, 0.7, 1);
        top: 4px;
        left: 3.5px;
        &:before {
            top: -4px;
            left: -4.7px;
        }
    }

    .comment-title-wrapper {
        margin-top: 50px;
        margin-right: 30px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .comment-box {
        line-height: 50px;
        text-align: center;
        // margin-top: 20px;
        width: 420px;
        font-size: 25px;
        height: 50px;
        background-color: #f9de4b;
        outline: 0;
        border: 0;
        letter-spacing: 1px;
        // cursor: pointer;
        position: relative;
        padding: 3px 35px;
        font-family: "Cafe24Syongsyong";
        font-style: normal;
        font-weight: 400;

        border-radius: 20px;
        border: 2px solid black;
        transition: transform 0.2s cubic-bezier(0, 0, 0.7, 1);

        // &:before {
        // 	z-index: -1;
        // 	position: absolute;
        // 	top: 0;
        // 	right: 0;
        // 	bottom: 0;
        // 	left: 0;
        // 	content: '';
        // 	width: 100%;
        // 	height: 100%;
        // 	position: absolute;
        // 	background: white;
        // 	transform: translate3d(0.2em, 0.15em, 1em);
        // 	border-radius: 20px;
        // 	border: 2px solid black;
        // 	transition: transform 0.2s cubic-bezier(0, 0, 0.7, 1);
        // 	&:active {
        // 		z-index: -1;
        // 	}
        // }
    }
    .photo-box {
        text-align: center;
        margin-top: 20px;
        width: 420px;
        font-size: 25px;
        height: 300px;
        background-color: #f9de4b;
        outline: 0;
        border: 0;
        letter-spacing: 1px;
        // cursor: pointer;
        position: relative;
        padding: 3px 35px;
        font-family: "Cafe24Syongsyong";
        font-style: normal;
        font-weight: 400;

        border-radius: 20px;
        border: 2px solid black;
        transition: transform 0.2s cubic-bezier(0, 0, 0.7, 1);

        // &:before {
        //     z-index: -1;
        //     position: absolute;
        //     top: 0;
        //     right: 0;
        //     bottom: 0;
        //     left: 0;
        //     content: "";
        //     width: 100%;
        //     height: 100%;
        //     position: absolute;
        //     background: white;
        //     transform: translate3d(0.2em, 0.15em, 1em);
        //     border-radius: 20px;
        //     border: 2px solid black;
        //     transition: transform 0.2s cubic-bezier(0, 0, 0.7, 1);
        //     &:active {
        //         z-index: -1;
        //     }
        // }
    }
    .diary_img {
        margin-top: 30px;
        border-radius: 15px;
        transition: all 0.2s linear;
        // box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        //     rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        //     rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    }

    .diary_img:hover {
        transform: scale(1.28);
    }

    .mama {
        color: red;
    }

    #sub {
        font-size: 30px;
        text-decoration: none;
        line-height: 60px;
        border-bottom: 2px solid black;
    }
`;

function DiaryDetail1() {
    // console.log(getStringDate(new Date()));
    const [correct, setCorrect] = useState(false);
    console.log(correct);

    return (
        <>
            <GlobalStyle backColor="yellow" />

            <Header isUndo />

            <MainBlock>
                <div className="main-wrapper">
                    <div className="leftside">
                        <div className="mini-header-wrapper">
                            <div className="diaryType-wrapper">
                                <Button
                                    buttonText={dummyData.diaryType}
                                    extraClassName="diaryType_button"
                                    inputColor="purple"
                                    width="130px;"
                                ></Button>
                            </div>
                            <div className="keywords-wrapper">
                                {dummyData.keywords.map((it, index) => (
                                    <Button
                                        key={index}
                                        buttonText={it}
                                        width="120px;"
                                        inputColor="green"
                                        extraClassName="keyword_button"
                                    ></Button>
                                ))}
                            </div>
                        </div>
                        <div className="diarycontents">
                            <div className="contents-box">
                                <div className="answers">
                                    <div className="answer" id="sub">
                                        날짜 | {dummyData.date}
                                    </div>
                                    <div className="answer" id="sub">
                                        날씨 | {dummyData.weather}
                                    </div>
                                    <div className="answer" id="sub">
                                        제목 | {dummyData.title}
                                    </div>
                                    {!correct ? (
                                        <div className="answer">
                                            {dummyData.text}
                                        </div>
                                    ) : (
                                        <div className="answer">
                                            영화 닥터스트레인지를 봤다. 이
                                            영화가{" "}
                                            <span className="mama">
                                                개봉 하는
                                            </span>{" "}
                                            날만 계속{" "}
                                            <span className="mama">
                                                기다려따
                                            </span>
                                            . 주인공이 마법을 하는데 화려한
                                            기술이 정말 멋있었다. 영화를 보면서
                                            나도 마법을 할 수 있는 상상을 했다.
                                            닥터스트레인지는{" "}
                                            <span className="mama">
                                                기대 만큼
                                            </span>{" "}
                                            재미있었다. 별점 만점이다.
                                        </div>
                                    )}
                                </div>
                                {dummyData.wantToCorrect ? (
                                    <div
                                        className={[
                                            "correct_button",
                                            correct === true
                                                ? `correct_button_on`
                                                : "",
                                        ].join(" ")}
                                        onClick={() => setCorrect(!correct)}
                                    >
                                        맞춤법 비교
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="rightside">
                        <div className="comment-wrapper">
                            <div className="comment-title-wrapper">
                                <img
                                    src={doran_img}
                                    height="140"
                                    width="95"
                                    alt=""
                                ></img>
                                <div className="content">
                                    도란쌤의
                                    <br />
                                    코멘트
                                </div>
                            </div>
                            <div className="comment-box" id="target">
                                {dummyData.comment}
                            </div>
                            {/* <div id="target">안녕하세요.</div> */}
                            <Helmet>
                                <script>TypeHangul.type('#target');</script>
                            </Helmet>
                        </div>
                        <div className="photo-wrapper">
                            <div className="content">
                                📷 사진으로 보는 일기 📷
                            </div>
                            <div className="photo-box">
                                <img
                                    className="diary_img"
                                    src={diary_img}
                                    height="240"
                                    width="380"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </MainBlock>
        </>
    );
}

export default DiaryDetail1;
