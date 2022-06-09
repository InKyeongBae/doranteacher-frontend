import React, { useState, useEffect } from "react";
import styled, { css, createGlobalStyle } from "styled-components";
import Header from "../../components/Header";
import Button from "../../components/Button";
import GlobalStyle from "../../components/GlobalStyle";
import { useNavigate, Link } from "react-router-dom";
import LeftDoran from "../../components/LeftDoran";
import ProgressBar from "../../components/ProgressBar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useCookies } from "react-cookie";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";
const processing_img = process.env.PUBLIC_URL + `/img/processing.png`;
const select_img = process.env.PUBLIC_URL + `/img/select.png`;
const MainBlock = styled.div`
    .buttons {
        margin-top: 30px;
        justify-content: center;
        // margin-right: 200px;
        display: flex;
        align-items: center;
    }

    .button {
        margin-right: 20px;
        margin-left: 20px;
    }

    .on {
        background: #e75244;
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

    .main {
        display: flex;
        justify-content: flex-end;
    }

    .diary_img {
        cursor: pointer;
        margin-bottom: 85px;
        margin-right: 100px;
        margin-left: 100px;
        // border-radius: 15px;
        // border: 3px solid gray;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
            rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
        width: 190px;
        height: 250px;
        /* padding-left: 60px; */
    }

    .leftSide {
        /* margin-left: 30px; */
        display: inline-flex;
        width: 100%;
        height: 605px;
        justify-content: center;
        align-items: center;
    }

    .centercontent {
        width: 800px;
        overflow: auto;
        white-space: nowrap;
    }
`;
const BigDoran = styled.div`
    .bigDoran {
        margin-top: 50px;
        height: 550px;
    }
`;

function DiaryList() {
    const navigate = useNavigate("");
    const [cookies] = useCookies(["acessToken"]);
    const [datas, setDatas] = useState([]);
    const diayList = () => {
        axios
            .get("http://3.39.158.98:8080/diaries", {
                headers: {
                    Authorization: `Bearer ${cookies["accessToken"]}`,
                    "Content-type": "application/json",
                },
            })
            .then((res) => {
                console.log(res.data.results);
                setDatas(res.data.results);
            });
    };

    useEffect(() => {
        diayList();
    }, []);

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
        toast.error("그림 추천 중입니다!", {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 1000,
        });
    };

    // const types = await axios
    // 		.get(`http://3.39.158.98:8080/diaries/book/count`, {
    // 			headers: {
    // 				Authorization: `Bearer ${cookies['accessToken']}`,
    // 				'Content-type': 'application/json',
    // 			},
    // 		})
    // 		.then((res) => {
    // 			var r = [];
    // 			setMonthNum(res.data.results.length);
    // 			return r;
    // 		})
    // 		.then((res) => setData(res));

    return (
        <>
            <GlobalStyle backColor="yellow" />
            <Header backColor="yellow" isLogout isSetting />
            <MainBlock>
                <div className="buttons">
                    <div className="button">
                        <Button
                            buttonText="이달의 일기"
                            width="250px"
                            height="50px"
                            extraClassName="on"
                        ></Button>
                    </div>
                    <div className="button">
                        <Button
                            buttonText="책으로 엮어보기"
                            width="250px"
                            height="50px"
                            onClick={() => navigate("/book-list")}
                        ></Button>
                    </div>
                </div>
                <div className="main">
                    <div className="leftSide">
                        <div className="centercontent">
                            {datas &&
                                datas.map((data, index) =>
                                    data.imgStatus === "COMPLETE" ? (
                                        <img
                                            key={index}
                                            className="diary_img"
                                            src={data["diaryImgUrl"]}
                                            height="200"
                                            width="150"
                                            onClick={() =>
                                                navigate(
                                                    "/diary/" + data["diaryId"],
                                                    {
                                                        state: {
                                                            id: 1,
                                                            job: "개발자",
                                                            // 여기에 이제 이미지 url을 끌고 가야함
                                                        },
                                                    }
                                                    // {
                                                    //     title: "회원가입 페이지에서 왔음",
                                                    // }
                                                )
                                            }
                                            alt=""
                                        />
                                    ) : data.imgStatus === "NEED_ACTION" ? (
                                        <img
                                            key={index}
                                            className="diary_img"
                                            src={select_img}
                                            height="200"
                                            width="150"
                                            onClick={() =>
                                                navigate(
                                                    "/diary/" +
                                                        data["diaryId"] +
                                                        "/select"
                                                    // "diary/:id/select"
                                                )
                                            }
                                            alt=""
                                        />
                                    ) : (
                                        // 아래는 data.imgStatus === "PROCESSING"일 경우를 의미한
                                        <img
                                            key={index}
                                            className="diary_img"
                                            src={processing_img}
                                            height="200"
                                            width="150"
                                            onClick={errorNotify}
                                            alt=""
                                        />
                                    )
                                )}
                        </div>
                    </div>
                    {/* <div className="middleSide"></div> */}
                    <div className="rightSide">
                        <BigDoran>
                            <img
                                className="bigDoran"
                                src="/img/big-doran-heart-left.png"
                            />
                        </BigDoran>
                    </div>
                </div>
            </MainBlock>
            <StyledContainer>
                <ToastContainer />
            </StyledContainer>
        </>
    );
}

export default DiaryList;
