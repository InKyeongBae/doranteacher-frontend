import React from "react";
import styled, { css } from "styled-components";
import Header from "../components/Header";
import Paint from "../components/Paint";
import GlobalStyle from "../components/GlobalStyle";
import Progressbar from "../components/Progressbar";
import ImgButton from "../components/ImgButton";

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
                    <Progressbar progressText={"2.글감 찾기"}></Progressbar>
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
