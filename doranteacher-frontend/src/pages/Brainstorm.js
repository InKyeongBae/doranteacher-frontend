import React from "react";
import styled, { css } from "styled-components";
import Header from "../components/Header";
import Paint from "../components/Paint";
import GlobalStyle from "../components/GlobalStyle";
import ImgButton from "../components/ImgButton";
import ProgressBar from "../components/ProgressBar";

const MainBlock = styled.div`
    .centercontent {
        font-family: "NeoDunggeunmo";
        font-style: normal;
        font-weight: 380;
        font-size: 38px;
        line-height: 48px;
        text-align: center;
        div {
            display: inline-block;
            vertical-align: middle;
            margin: 40px 0;
        }

        button {
            display: inline-block;
            vertical-align: middle;
            margin: 10px 20px;
        }
    }

    .paint {
        text-align: center;
        width: 562px;
        margin: 0 auto;
        .canvas {
            .literally toolbar-at-top {
                text-align: center;
            }
        }
    }

    .buttonline {
        text-align: center;
        width: 195px;
        margin: 20px auto;
    }

    .wordlist {
        display: inline-block;
        padding: 25px 20px;

        background: #f9de4b;
        border: 3px solid #000000;
        box-sizing: border-box;
        border-radius: 32px;

        font-family: "NeoDunggeunmo";
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 25px;
        text-align: center;
        color: #000000;

        &:after {
            z-index: 5;
            font-family: "ImcreSoojin OTF";
            font-size: 30px;
            background: #e75244;
            /* width: 50px;
			height: 50px; */
            border-radius: 100%;
            width: 100%;
            padding: 0 11px;
            padding-bottom: 5px;
            content: "x";
            color: white;
            transform: translate3d(0.2em, 0.15em, 1em);

            margin-left: 10px;
            margin-bottom: 10px;
            transition: transform 0.2s cubic-bezier(0, 0, 0.7, 1);
        }
    }
`;

function Brainstorm() {
    return (
        <>
            <GlobalStyle backColor="red" />
            <Header
                isProgress
                isLogout
                isImgBtn
                progress={
                    <ProgressBar
                        progressText={"2.글감찾기"}
                        progressWidth={"25"}
                        progressColor={"#E75244"}
                    ></ProgressBar>
                }
            />
            <MainBlock>
                <div className="centercontent">
                    <ImgButton prev />
                    <div>
                        오늘 가장 재밌었던 일이 뭐였나요?
                        <br />
                        단어로 한 번 적어볼까요?
                    </div>
                    <ImgButton next />
                </div>
                <div className="paint">
                    <Paint />
                </div>
            </MainBlock>
        </>
    );
}

export default Brainstorm;
