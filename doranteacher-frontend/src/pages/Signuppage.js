import React, { useState } from "react";
// import { useDispatch } from 'react-redux';
import Button from "../components/Button";
import styled, { css, createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import GlobalStyle from "../components/GlobalStyle";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

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
        font-family: "KOTRAHOPE";
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
        font-family: "Cafe24Syongsyong";
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

    const navigate = useNavigate();
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

    // const dispatch = useDispatch();

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

    // login 버튼 클릭 이벤트
    const onClickLogin = () => {
        console.log("click login");
    };

    const successNotify = () => {
        toast.success("회원가입에 성공했어요!", {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 1800,
        });
    };

    const onSubmitHandler = (event) => {
        // 태그의 기본 기능으로 리프레쉬 되는 것을 방지.
        event.preventDefault();

        if (Password !== ConfirmPassword) {
            return alert("비밀번호와 비밀번호 확인은 같아야 해요!");
        }

        let data = {
            nickname: Name,
            username: Id,
            password1: Password,
            password2: Password,
        };

        console.log(data);

        axios
            .post("http://3.39.158.98:8080/auth/signup", data)
            .then((res) => {
                console.log(res);
                console.log("토스트시작");
                successNotify();
                console.log("토스트끝");
                setTimeout(function setNavi() {
                    navigate("/login");
                }, 1800);
                // navigate("/login");
                //이동할 url 연결 해야함
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <GlobalStyle backColor="yellow" />
            <Header isIcon isLogin backColor="yellow" />
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
                                    onClick={onClickLogin}
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
            <StyledContainer>
                <ToastContainer />
            </StyledContainer>
        </>
    );
}

export default Signuppage;
