import React from "react";
import styled, { css, createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import Button from "../components/Button";
import GlobalStyle from "../components/GlobalStyle";

const LeftDoran = styled.div`
    position: fixed;
    bottom: 0;
    padding: 0px 0px 0px 30px;

    .leftDoran {
        width: 250px;
        height: 300px;
        background: url("/img/doran_half_2.png") no-repeat 0 0 / auto 300px;
    }
`;

const QuestionBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .question {
        height: 30vh;
        display: flex;
        line-height: 40px;
    }

    .content {
        font-family: "NeoDunggeunmo";
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        align-self: center;
        text-align: center;
        padding: 40px 0px 0px 0px;
    }
    .buttons {
    }
`;

const SettingUI = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .step_buttons {
        display: flex;
        justify-content: center;
    }

    .step_contents {
        display: flex;
        justify-content: center;
        font-family: "NeoDunggeunmo";
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
        text-align: center;
    }

    .step_button {
        padding: 25px 25px;
    }

    .step_content {
        padding: 25px 25px;
    }
`;

function Setting() {
    return (
        <>
            <GlobalStyle backColor="yellow" />
            <Header />
            <LeftDoran>
                <div className="leftDoran" />
            </LeftDoran>
            <QuestionBlock>
                <div className="question">
                    <div className="content">
                        자! 이제 도란쌤과 함께 일기를 써볼꺼야.
                        <br />그 전에 , OO이는 일기와 얼만큼 친해?
                    </div>
                </div>
            </QuestionBlock>
            <SettingUI>
                <div className="step_buttons">
                    <Button
                        buttonText="1단계"
                        outputColor="red"
                        className="step_button"
                    ></Button>

                    <Button
                        buttonText="2단계"
                        outputColor="red"
                        className="step_button"
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
            </SettingUI>
        </>
    );
}

export default Setting;
