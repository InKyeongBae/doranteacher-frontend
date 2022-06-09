import React, { useState } from "react";
import styled, { css, createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import Button from "../components/Button";
import GlobalStyle from "../components/GlobalStyle";
import {
    useNavigate,
    Link,
    Navigate,
    useParams,
    useLocation,
} from "react-router-dom";
import LeftDoran from "../components/LeftDoran";
import ProgressBar from "../components/ProgressBar";
import { ToastContainer, toast } from "react-toastify";
import { useCookies } from "react-cookie";
import NextButton from "../components/NextButton";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

// 0 -125 -250 -375
// -125 하고 0 -125 -250 -375
// 1034 × 776

// margin: 10px 20px 15px 5px; 상 우 좌 하 (시계 방향 순서)

const imgList = [
    // 내가 알아서 크롭해야함
    {
        id: 1, //이미지 식별하려고 붙여놓은 이름
        x: "0px",
        y: "0px",
    },
    {
        id: 2,
        x: "0px",
        y: "-125px",
    },
    {
        id: 3,
        x: "0px",
        y: "-250px",
    },
    {
        id: 4,
        x: "0px",
        y: "-375px",
    },
    {
        id: 5,
        x: "-125px",
        y: "0px",
    },
    {
        id: 6,
        x: "-125px",
        y: "-125px",
    },
    {
        id: 7,
        x: "-125px",
        y: "-250px",
    },
    {
        id: 8,
        x: "-125px",
        y: "-375px",
    },
];

const MainBlock = styled.div`
    .question {
        margin-top: 20px;
        font-family: "KOTRAHOPE";
        font-style: normal;
        font-weight: 380;
        font-size: 38px;
        line-height: 48px;
        text-align: center;
        margin-bottom: 30px;
    }

    .input_box_img_list_wrapper {
        padding-left: 5%;
        // width: 50%;
        place-items: center;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        row-gap: 15px;
        column-gap: 20px;
    }

    .whitebox {
        display: flex;
        // flex-direction: column;
        align-items: center;
        // padding-top: 20px;

        width: 600px;
        height: 450px;
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

    .content-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .button-wrapper {
        align-self: flex-end;
        margin-right: 40px;
        margin-bottom: 20px;
    }

    .cropped {
        width: 260px;
        height: 260px;
        // object-fit: cover;
        overflow: hidden;
    }

    .cropped img {
        margin: 0px 0px 0px 0px;
    }
`;
const Img = styled.div``;

function SelectImage({ route }) {
    // 1. 이미지 url이랑 diaryid 값 가져와야하고
    // 2. 특정 이미지 누르면 해당 patch로 API 호출해야함
    // 3. 디테일 페이지 에서두...비두ㅈ
    // const location = useLocation();
    // const id = location.state.id;
    // const job = location.state.job;
    // console.log(id);
    // console.log(job);
    const img_url = process.env.PUBLIC_URL + `/img/recommend.jpg`;

    imgList.map((it) => console.log(it.id));
    const navigate = useNavigate("");

    console.log(process.env.PUBLIC_URL);
    // const img_url = process.env.PUBLIC_URL + `/img/recommend.jpg`;

    return (
        <>
            <GlobalStyle backColor="yellow" />
            <LeftDoran>
                <div className="leftDoran" />
            </LeftDoran>
            <Header isProgress isLogout isImgBtn />
            <MainBlock>
                <div className="question">
                    일기 내용과 가장 어울리는
                    <br />
                    그림을 선택해봐 !
                </div>
                <div className="content-wrapper">
                    {/* <div className="whitebox"> */}
                    <div className="input_box_img_list_wrapper">
                        {imgList.map((it) => (
                            <div className="cropped">
                                <Img {...it}>
                                    <img
                                        src="/img/recommend.jpg"
                                        alt=""
                                        x={it.x}
                                        y={it.y}
                                    ></img>
                                </Img>
                            </div>
                        ))}
                    </div>
                    {/* </div> */}
                </div>
            </MainBlock>
        </>
    );
}

export default SelectImage;
