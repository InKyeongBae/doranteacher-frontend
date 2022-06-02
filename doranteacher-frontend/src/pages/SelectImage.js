import React, { useState } from "react";
import styled, { css, createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import Button from "../components/Button";
import GlobalStyle from "../components/GlobalStyle";
import { useNavigate, Link, Navigate } from "react-router-dom";
import LeftDoran from "../components/LeftDoran";
import ProgressBar from "../components/ProgressBar";
import { ToastContainer, toast } from "react-toastify";
import { useCookies } from "react-cookie";
import NextButton from "../components/NextButton";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";
// 1034 × 776
const imgList = [
    // 내가 알아서 크롭해야함
    {
        id: 1, //이미지 식별하려고 붙여놓은 이름
        img_url:
            process.env.PUBLIC_URL + `/img/image_recommend/hamburger_1.png`,
    },
    {
        id: 2,
        img_url:
            process.env.PUBLIC_URL + `/img/image_recommend/hamburger_2.png`,
    },
    {
        id: 3,
        img_url:
            process.env.PUBLIC_URL + `/img/image_recommend/hamburger_3.png`,
    },
    {
        id: 4,
        img_url:
            process.env.PUBLIC_URL + `/img/image_recommend/hamburger_4.png`,
    },
    {
        id: 5,
        img_url:
            process.env.PUBLIC_URL + `/img/image_recommend/hamburger_5.png`,
    },
    {
        id: 6,
        img_url:
            process.env.PUBLIC_URL + `/img/image_recommend/hamburger_6.png`,
    },
    {
        id: 7,
        img_url:
            process.env.PUBLIC_URL + `/img/image_recommend/hamburger_7.png`,
    },
    {
        id: 8,
        img_url:
            process.env.PUBLIC_URL + `/img/image_recommend/hamburger_8.png`,
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
        padding-top: 20px;

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

    .hamburger_img {
        cursor: pointer;
        margin-bottom: 20px;
    }
`;
function SelectImage() {
    const navigate = useNavigate("");
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
                    <div className="whitebox">
                        <div className="input_box_img_list_wrapper">
                            {imgList.map(
                                (it) => (
                                    <img
                                        className="hamburger_img"
                                        src={it.img_url}
                                        height="120"
                                        width="120"
                                        alt=""
                                        onClick={() => {
                                            navigate("/diary/2");
                                        }}
                                    />
                                )
                                // <TypeItem
                                //     key={it.id}
                                //     {...it}
                                //     onClick={handleClickDiary}
                                //     isSelected={it.id === diary}
                                // />
                            )}
                        </div>
                    </div>
                    {/* <div className="button-wrapper">
                        <Button
                            buttonText="저장"
                            inputColor="purple"
                            type="submit"
                            outputColor="purple"
                            extraClassName="save_button"
                            // onClick={saveFunc}
                        ></Button>
                    </div> */}
                </div>
            </MainBlock>
        </>
    );
}

export default SelectImage;
