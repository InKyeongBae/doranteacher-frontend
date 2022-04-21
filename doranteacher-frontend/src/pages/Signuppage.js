import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../components/Button";
import { signupUser } from "../_actions/user_action";
import styled, { css, createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import GlobalStyle from "../components/GlobalStyle";

const MainBlock = styled.div`
    background: #f9de4b;
    display: flex;
    justify-content: space-between;
    .leftSide {
        width: 22vw;
    }

    .middleSide {
    }
    .rightSide {
    }
`;

const CenterLogo = styled.div`
    text-align: center;

    img {
        width: 300px;
        padding: 50px 0px 20px 0px;
    }

    .centercontent {
        font-family: "NeoDunggeunmo";
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 30px;
        padding: 0px 0px 70px 0px;
    }
`;

const SignupUI = styled.div`
    .column {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 0px 130px 0px 0px;
    }

    .content {
        font-family: "상상토끼 꽃집막내딸 OTF";
        font-style: normal;
        font-weight: 450;
        font-size: 25px;
        line-height: 25px;
        background: #f9de4b;
        text-align: center;
    }

    .content_button {
        padding: 20px;
        text-align: center;
    }
`;

const BigDoran = styled.div`
    .bigDoran {
        height: 700px;
    }
`;

const Input = styled.input`
    width: 250px;
    padding: 10px;
    margin: 5px 10px 5px 10px;
    background: #f9de4b;
    border-radius: 10px;
    border: 2px solid black;
    &:focus {
        background: white;
    }
`;

function Signuppage(props) {
    const [Name, setName] = useState("");
    const [Id, setId] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    const dispatch = useDispatch();

    // handler 함수들
    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    };

    const onIdHandler = (event) => {
        setId(event.currentTarget.value);
    };

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value);
    };

    const onSubmitHandler = (event) => {
        // 태그의 기본 기능으로 리프레쉬 되는 것을 방지.
        event.preventDefault();

        if (Password !== ConfirmPassword) {
            return alert("비밀번호와 비밀번호 확인은 같아야 해요!");
        }

        let body = {
            name: Name,
            id: Id,
            password: Password,
        };

        // action의 반환값을 dispatch해준다.
        dispatch(signupUser(body)).then((response) => {
            if (response.payload.loginSuccess) {
                props.history.push("/login");
            } else {
                alert("회원가입에 실패했어요.");
            }
        });
    };

    return (
        <>
            <GlobalStyle backColor="yellow" />
            <Header isIcon isLogin />
            <MainBlock>
                <div className="leftSide"></div>
                <div className="middleSide">
                    <CenterLogo>
                        <div className="centerlogo">
                            <img
                                className="doranLogo"
                                src="/img/doranlogo.png"
                            />
                        </div>
                        <div className="centercontent">
                            AI 도란쌤과 함께
                            <br />
                            일기 마스터하기
                        </div>
                    </CenterLogo>

                    <SignupUI>
                        <form onSubmit={onSubmitHandler}>
                            <div className="signupform">
                                <div className="column">
                                    <label className="content">이름</label>
                                    <Input
                                        className="input"
                                        type="name"
                                        value={Name}
                                        onChange={onNameHandler}
                                    />
                                </div>
                                <div className="column">
                                    <label className="content">아이디</label>
                                    <Input
                                        className="input"
                                        type="id"
                                        value={Id}
                                        onChange={onIdHandler}
                                    />
                                </div>
                                <div className="column">
                                    <label className="content">비밀번호</label>
                                    <Input
                                        className="input"
                                        type="password"
                                        value={Password}
                                        onChange={onPasswordHandler}
                                    />
                                </div>
                                <div className="column">
                                    <label className="content">
                                        비밀번호 확인
                                    </label>
                                    <Input
                                        className="input"
                                        type="password"
                                        value={ConfirmPassword}
                                        onChange={onConfirmPasswordHandler}
                                    />
                                </div>

                                <br />
                                <Button
                                    buttonText="회원가입"
                                    type="submit"
                                    outputColor="red"
                                    className="content_button"
                                ></Button>
                            </div>
                        </form>
                    </SignupUI>
                </div>
                <div className="rightSide">
                    <BigDoran>
                        <img
                            className="bigDoran"
                            src="/img/big-doran-smile.png"
                        />
                    </BigDoran>
                </div>
            </MainBlock>
        </>
    );
}

export default Signuppage;
