import React, { useState } from "react";
import styled, { css, createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import Button from "../components/Button";
import GlobalStyle from "../components/GlobalStyle";
import { useNavigate, Link } from "react-router-dom";
import LeftDoran from "../components/LeftDoran";
import ProgressBar from "../components/ProgressBar";
import { ToastContainer, toast } from "react-toastify";
import { useCookies } from "react-cookie";

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
        padding-top: 20px;

        width: 600px;
        height: 480px;
        z-index: 1;
        background: white;
        outline: 0;
        border: 0;
        letter-spacing: 1px;
        position: relative;

        border-radius: 25px;
        border: 2px solid black;
        transition: transform 0.2s cubic-bezier(0, 0, 0.7, 1);
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
        // background: #5dcb83;
        transition: all 0.1s cubic-bezier(0, 0, 0.7, 1);
        top: 3px;
        left: -3px;
        box-shadow: -3px 3px 0 var(--brown);

        &::after {
            top: 1px;
            left: -2px;
            width: var(--angle);
            height: var(--angle);
        }

        &::before {
            bottom: -2px;
            right: 1px;
            width: var(--angle);
            height: var(--angle);
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
    const [painting, setPainting] = useState(true);
    const [correct, setCorrect] = useState(true);
    const [comment, setComment] = useState(true);
    const [file, setFile] = useState(null);
    // const [text, setText] = useState(localStorage.getItem("text"));
    // const [correctText, setCorrectText] = useState(null);
    const [cookies] = useCookies(["acessToken"]);

    console.log(painting);
    console.log(correct);
    console.log(comment);
    console.log(file);

    const navigate = useNavigate("");

    const StyledContainer = styled(ToastContainer)`
        &&&.Toastify__toast-container {
            bottom: 80px;
            right: 20px;
        }
        .Toastify__toast {
            font-size: 30px;
        }
        .Toastify__toast-body {
            font-family: "KOTRAHOPE";
            font-style: normal;
            font-size: 24px;
            color: black;
        }
        .Toastify__progress-bar {
        }
    `;

    const errorNotify = () => {
        toast.error("사진을 업로드해주세요", {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 1000,
        });
    };

    const successNotify = () => {
        toast.success("일기가 성공적으로 추가 되었어요🎉", {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 1800,
        });
    };

    // function checkSpelling() {
    // text =
    //     "엄마꼐 재롱을 부렸다. 보상이 있기 때문에 재롱을 부렸다. 열심히 효도하는 것은 힘들어따. 그래도 엄마가 우리딸 고마워라고 해주얻따. 앞으로도 자주 효도를 하고 싶다.";
    // 1. 맞춤법 교정을 하고,
    // 2. 1번 결과값을 textdㅔ update하고,
    // 3. 맞춤법교정 표시까지 된 텍스트는 correct_Text에 Update
    // hanspell-example.js

    // const sentence = text;
    // const end = function () {
    //     console.log("// check ends");
    // };
    // const error = function (err) {
    //     console.error("// error: " + err);
    // };

    // hanspell.spellCheckByDAUM(sentence, 6000, console.log, end, error);
    // hanspell.spellCheckByPNU(sentence, 6000, console.log, end, error);
    // return "hello";
    // }

    function saveFunc() {
        if (!painting && !file) {
            errorNotify();
        }

        console.log(typeof localStorage.getItem("title"));
        fetch("http://3.39.158.98:8080/diaries", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${cookies["accessToken"]}`,
            },
            body: JSON.stringify({
                title: localStorage.getItem("title"),
                date: localStorage.getItem("date"),
                weather: localStorage.getItem("weather"),
                keywords: localStorage.getItem("keywords"),
                text: localStorage.getItem("text"),
                diaryType: localStorage.getItem("diaryType"),
                isPrivate: comment,
                wantToCorrect: correct,
                wantToImage: painting,
            }),
        }).then((response) => {
            successNotify();
            setTimeout(function setNavi() {
                navigate("/");
            }, 1800);
        });
    }
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
                        progressWidth={"100"}
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
                                extraClassName={painting === true ? `on` : ""}
                                onClick={() => setPainting(!painting)}
                            ></Button>
                        </div>
                        <div className="buttonStyle">
                            <Button
                                buttonText="사진업로드"
                                inputColor="purple"
                                extraClassName={painting === false ? "on" : ""}
                                onClick={() => setPainting(!painting)}
                            />
                        </div>
                    </div>

                    <div className="imageUpload">
                        {!painting ? (
                            <input
                                type="file"
                                id="ex_file"
                                accept="image/jpg, image/png, image/jpeg"
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                        ) : (
                            ""
                        )}
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
                                extraClassName={correct === true ? `on` : ""}
                                onClick={() => setCorrect(!correct)}
                            ></Button>
                        </div>
                        <div className="buttonStyle">
                            <Button
                                buttonText="아니요"
                                inputColor="purple"
                                extraClassName={correct === false ? "on" : ""}
                                onClick={() => setCorrect(!correct)}
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
                                buttonText="네"
                                inputColor="purple"
                                extraClassName={comment === true ? `on` : ""}
                                onClick={() => setComment(!comment)}
                            ></Button>
                        </div>
                        <div className="buttonStyle">
                            <Button
                                buttonText="아니요"
                                inputColor="purple"
                                extraClassName={comment === false ? "on" : ""}
                                onClick={() => setComment(!comment)}
                            ></Button>
                        </div>
                    </div>
                </div>
                <div className="nextButton">
                    <Button
                        buttonText="끝!"
                        type="submit"
                        outputColor="purple"
                        onClick={saveFunc}
                    ></Button>
                </div>
            </MainBlock>
            <StyledContainer>
                <ToastContainer />
            </StyledContainer>
        </>
    );
}
export default DiarySave;
