import React, { useState } from "react";
import styled, { css, createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import Button from "../components/Button";
import GlobalStyle from "../components/GlobalStyle";
import { ToastContainer, toast } from "react-toastify";

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
        margin-bottom: 50px;
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
        margin-left: 50px;
        margin-right: 50px;
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

    .setting_on {
        background: #5dcb83;
        transition: all 0.1s cubic-bezier(0, 0, 0.7, 1);
        top: 4px;
        left: 3.5px;
        &:before {
            top: -4px;
            left: -4.7px;
        }
    }
`;

function Setting() {
    const [setting, setSetting] = useState(0);
    // console.log(setting);

    const onSave = (e) => {
        // 여기 추가해야함
        console.log("저장");
    };

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
                        extraClassName={[
                            "step_button",
                            1 === setting ? `setting_on` : "",
                        ].join(" ")}
                        onClick={() => setSetting(1)}
                        width="190px"
                        height="80px"
                    ></Button>

                    <Button
                        buttonText="2단계"
                        outputColor="green"
                        extraClassName={[
                            "step_button",
                            2 === setting ? `setting_on` : "",
                        ].join(" ")}
                        width="190px"
                        height="80px"
                        onClick={() => setSetting(2)}
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
                    onClick={onSave}
                ></Button>
            </MainBlock>
        </>
    );
}

export default Setting;
