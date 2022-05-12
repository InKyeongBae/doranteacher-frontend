import React from "react";
import styled, { css, createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import Button from "../components/Button";
import GlobalStyle from "../components/GlobalStyle";
import { useNavigate, Link } from "react-router-dom";
import LeftDoran from "../components/LeftDoran";
import ProgressBar from "../components/ProgressBar";

const MainBlock = styled.div`
    .question {
        margin-top: 40px;
        font-family: "NeoDunggeunmo";
        font-style: normal;
        font-weight: 380;
        font-size: 38px;
        line-height: 48px;
        text-align: center;
    }
`;
const TypeList = styled.div``;
function DiaryType() {
    const navigate = useNavigate();
    return (
        <>
            <GlobalStyle backColor="red" />
            <LeftDoran />
            <Header
                isProgress
                isLogout
                isImgBtn
                progress={
                    <ProgressBar
                        progressText={"3. 유형선택"}
                        progressWidth={"37.5"}
                        progressColor={"#E75244"}
                        backColor="red"
                    ></ProgressBar>
                }
            />
            <MainBlock>
                <div className="question">
                    오늘 너에게 딱 맞는
                    <br />
                    일기 유형을 추천해줄게!
                </div>
                <TypeList></TypeList>
                <Button
                    buttonText="다음"
                    type="submit"
                    outputColor="purple"
                    className="button"
                    onClick={() => navigate("/writing/step1")}
                ></Button>
            </MainBlock>
        </>
    );
}
export default DiaryType;
