import React from "react";
import styled, { css, createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import Button from "../components/Button";
import GlobalStyle from "../components/GlobalStyle";

// 단계 설정 페이지 용 도란쌤
const LeftDoran = styled.div`
    position: fixed;
    bottom: 0;
    padding: 0px 0px 0px 30px;

    width: 250px;
    height: 300px;
    background: url("/img/doran_half_2.png") no-repeat 0 0 / auto 300px;
`;

const MainBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .question {
        margin-top: 100px;
        margin-bottom: 70px;
        line-height: 40px;
        font-family: "KOTRAHOPE";
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        text-align: center;
    }

    .step_buttons {
        display: flex;
        justify-content: center;
    }

    .step_button {
        padding: 0px 50px;
    }

    .step_contents {
        display: flex;
        justify-content: center;
    }

    .step_content {
        padding: 25px 25px;
        margin: 50px;
        min-width: 140px;

        height: 100px;
        outline: 1px;
        letter-spacing: 1px;
        position: relative;
        border-radius: 35px;
        border: 2px solid black;

        font-size: 24px;
        font-family: "KOTRAHOPE";
        line-height: 110%;
        text-align: center;
        font-style: normal;
    }

    .saveButton {
        margin: 10px 110px 10px 10px;
        align-self: flex-end;
    }
`;

function Setting() {
    return (
        <>
            <GlobalStyle backColor="yellow" />
            <Header isUndo backColor="yellow" />
            <LeftDoran>
                <div className="leftDoran" />
            </LeftDoran>
            <MainBlock>
                <div className="question">
                    자! 이제 도란쌤과 함께 일기를 써볼꺼야.
                    <br />그 전에 , OO이는 일기와 얼만큼 친해?
                </div>
                <div className="step_buttons">
                    <Button
                        buttonText="1단계"
                        outputColor="green"
                        className="step_button"
                        width="190px"
                        height="80px"
                    ></Button>

                    <Button
                        buttonText="2단계"
                        outputColor="green"
                        className="step_button"
                        width="190px"
                        height="80px"
                    ></Button>
                </div>

                <div className="step_contents">
                    <div className="step_content">
                        글씨를 <br />쓸 수 있지만 <br />
                        길게 쓰기가 <br />
                        어려워요
                    </div>

                    <div className="step_content">
                        글쓰기는 <br />
                        익숙하지만 <br />
                        표현력을 <br />
                        기르고싶어요!
                    </div>
                </div>
                <Button
                    buttonText="저장하기"
                    type="submit"
                    outputColor="red"
                    className="saveButton"
                ></Button>
            </MainBlock>
        </>
    );
}

export default Setting;
