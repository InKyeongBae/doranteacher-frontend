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
    const [painting, setPainting] = useState(true);
    const [correct, setCorrect] = useState(true);
    const [comment, setComment] = useState(true);
    const [file, setFile] = useState(null);
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

    function saveFunc() {
        if (!painting && !file) {
            errorNotify();
            console.log("!!");
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
        })
            .then((response) => response.json())
            .then((res) => console.log(res));
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
