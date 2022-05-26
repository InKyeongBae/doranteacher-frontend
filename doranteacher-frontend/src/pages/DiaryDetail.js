import React, { useState } from "react";
import styled, { css, createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import Button from "../components/Button";
import GlobalStyle from "../components/GlobalStyle";
import { useNavigate, Link } from "react-router-dom";
import ImgButton from "../components/ImgButton";
const dummyData =
    // 서버로부터 데이터를 받아와야함
    {
        weather: "sunny",
        date: "2022-05-13",
        diaryType: "효도일기",
        keywords: ["#밥", "#고기", "#엄마", "#요리"],
        // 키워드도 json 배열 형태로 넘겨와야함
        title: "엄마가 저녁에 고기반찬 해준 날🍖",
        text: "엄마께 재롱을 부렸다. 보상이 있기 때문에 재롱을 부렸다. 열심히 효도하는 것은 힘들었다. 그래도 엄마가 우리딸 고마워라고 해주셨다. 앞으로도 자주 효도를 하고 싶다.",
        before_text:
            "엄마꼐 재롱을 부렸다. 보상이 있기 때문에 재롱을 부렸다. 열심히 효도하는 것은 힘들어따. 그래도 엄마가 우리딸 고마워라고 해주얻따. 앞으로도 자주 효도를 하고 싶다.",
        isPrivate: true,
        wantToCorrect: true,
        hasImage: true,
        imagePath: "",
        // 이미지 경로도 있어야함
    };

const MainBlock = styled.div`
    .diarycontents {
        margin-top: 30px;
        margin-left: 20px;
        // margin-right: 110px;
    }

    .contents-box {
        background-color: white;
        border-radius: 15px;
        min-height: 70vh;
        max-width: 50vw;
        display: flex;
        align-items: center;

        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
            rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    }

    .answers {
        padding: 30px;
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
        // font-family: "KOTRAHOPE";
        font-size: 20px;
        cursor: default;
        pointer-events: none;
        padding-right: 10px;
        padding-left: 10px;
        margin-right: 5px;
        margin-left: 5px;
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

    .correct_button {
        margin-right: 5px;
        margin-left: 5px;
    }

    .main-wrapper {
        display: flex;
    }
`;

function DiaryDetail() {
    // console.log(getStringDate(new Date()));
    const [correct, setCorrect] = useState(false);
    console.log(correct);

    const navigate = useNavigate("");
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
                                    inputColor="green"
                                    width="120px;"
                                ></Button>
                            </div>
                            <div className="keywords-wrapper">
                                {dummyData.keywords.map((it) => (
                                    <Button
                                        buttonText={it}
                                        width="80px;"
                                        extraClassName="keyword_button"
                                    ></Button>
                                ))}
                            </div>
                            <ImgButton
                                // setting={false}
                                check={true}
                                onClick={() => setCorrect(!correct)}
                                outputColor="red"
                                extraClassName={
                                    correct === true
                                        ? `correct_button on`
                                        : "correct_button"
                                }
                            ></ImgButton>
                        </div>
                        <div className="diarycontents">
                            <div className="contents-box">
                                <div className="answers">
                                    <div className="answer">
                                        {dummyData.text}
                                    </div>
                                    {/* {answers.map((answer) => (
                                        <div className="answer" key={id++}>
                                            {answer}
                                        </div>
                                    ))} */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rightside">
                        <div className="photo-wrapper"></div>
                        <div className="comment-wrapper"></div>
                    </div>
                </div>
            </MainBlock>
        </>
    );
}

export default DiaryDetail;
