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
    flex-direction: column;
    align-items: center;
    .content {
        margin-top: 30px;
        margin-bottom: 20px;
        font-family: "KOTRAHOPE";
        font-style: normal;
        font-weight: 380;
        font-size: 35px;
        line-height: 48px;
        text-align: center;
    }

    .question {
        margin-top: 25px;
        margin-bottom: 20px;
        font-family: "KOTRAHOPE";
        font-style: normal;
        font-weight: 380;
        font-size: 25px;
        line-height: 48px;
        text-align: center;
    }

    .yellowbox {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 600px;
        height: 480px;
        background: #f9de4b;
        outline: 0;
        border: 0;
        letter-spacing: 1px;
        position: relative;

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

    .buttons {
        display: flex;
    }

    .buttonStyle {
        margin-left: 10px;
        margin-right: 10px;
    }

    .saveButton {
        margin-top: 15px;
    }

    .key {
        color: #e75244;
    }

    .nextButton {
        align-self: flex-end;
        margin-top: 20px;
        margin-right: 70px;
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

    // input[type="file"] {
    //     position: absolute;
    //     width: 0;
    //     height: 0;
    //     padding: 0;
    //     margin: -1px;
    //     overflow: hidden;
    //     clip: rect(0, 0, 0, 0);
    //     border: 0;
    // }

    .imageUpload {
        padding-left: 280px;
        margin-top: 20px;
        margin-bottom: -20px;
    }
`;

function DiarySave() {
    // console.log(getStringDate(new Date()));
    const [comment, setComment] = useState(0);
    const [correct, setCorrect] = useState(0);
    const [painting, setPainting] = useState(0);
    const [file, setFile] = useState("");
    console.log(painting);

    const navigate = useNavigate("");
    return (
        <>
            <GlobalStyle backColor="yellow" />
            <LeftDoran />
            <Header
                isProgress
                isLogout
                isImgBtn
                progress={
                    <ProgressBar
                        progressText={"7.일기저장"}
                        progressWidth={"87.5"}
                        progressColor={"#E75244"}
                        backColor="red"
                    ></ProgressBar>
                }
            />
            <MainBlock>
                <div className="content">
                    거의 다 끝났어요!
                    <br />
                    아래의 질문에 대답해볼까요?
                </div>
                <div className="yellowbox">
                    <div className="question">
                        Q1. 일기와 어울리는 <span className="key">그림</span>을
                        추천해줄까요?
                    </div>
                    <div className="buttons">
                        <div className="buttonStyle">
                            <Button
                                buttonText="네"
                                inputColor="purple"
                                extraClassName={painting === 1 ? `on` : ""}
                                onClick={() => setPainting(1)}
                            ></Button>
                        </div>
                        <div className="buttonStyle">
                            <Button
                                buttonText="사진업로드"
                                inputColor="purple"
                                extraClassName={painting === 2 ? "on" : ""}
                                onClick={() => setPainting(2)}
                            />
                        </div>
                    </div>

                    <div className="imageUpload">
                        <ImageUpload props={painting} />
                    </div>
                    <div className="question">
                        Q2. 도란쌤의 <span className="key">맞춤법 교정</span>을
                        원하나요?
                    </div>
                    <div className="buttons">
                        <div className="buttonStyle">
                            <Button
                                buttonText="네"
                                inputColor="purple"
                                extraClassName={correct === 1 ? `on` : ""}
                                onClick={() => setCorrect(1)}
                            ></Button>
                        </div>
                        <div className="buttonStyle">
                            <Button
                                buttonText="아니요"
                                inputColor="purple"
                                extraClassName={correct === 2 ? "on" : ""}
                                onClick={() => setCorrect(2)}
                            ></Button>
                        </div>
                    </div>
                    <div className="question">
                        Q3. 도란쌤의 <span className="key">답변</span>를 받고
                        싶나요?
                    </div>
                    <div className="buttons">
                        <div className="buttonStyle">
                            <Button
                                buttonText="좋아요"
                                inputColor="purple"
                                extraClassName={comment === 1 ? `on` : ""}
                                onClick={() => setComment(1)}
                            ></Button>
                        </div>
                        <div className="buttonStyle">
                            <Button
                                buttonText="아니요"
                                inputColor="purple"
                                extraClassName={comment === 2 ? "on" : ""}
                                onClick={() => setComment(2)}
                            ></Button>
                        </div>
                    </div>
                </div>
                <div className="nextButton">
                    <Button
                        buttonText="끝!"
                        type="submit"
                        outputColor="purple"
                        onClick={() => navigate("/")}
                    ></Button>
                </div>
            </MainBlock>
        </>
    );
}
export default DiarySave;
