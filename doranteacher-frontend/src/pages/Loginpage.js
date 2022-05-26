import React, { useState } from "react";
import Button from "../components/Button";
import styled from "styled-components";
import Header from "../components/Header";
import GlobalStyle from "../components/GlobalStyle";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Navigate, useNavigate } from "react-router-dom";

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
        padding: 100px 0px 20px 0px;
    }

    .centercontent {
        font-family: "KOTRAHOPE";
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
        line-height: 30px;
        padding: 0px 0px 70px 0px;
    }
`;

const LoginUI = styled.div`
    .column {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 0px 80px 0px 0px;
    }

    .content {
        font-family: "Cafe24Syongsyong";
        font-style: normal;
        font-weight: 450;
        font-size: 30px;
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

const Loginpage = (props) => {
    const [Id, setId] = useState("");
    const [Password, setPassword] = useState("");
    const [cookies, setCookie, removeCookie] = useCookies(["acessToken"]);
    const navigate = useNavigate();

    // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const handleId = (e) => {
        setId(e.target.value);
    };

    const handlePasswrd = (e) => {
        setPassword(e.target.value);
    };

    // login 버튼 클릭 이벤트
    const onClickLogin = () => {
        console.log("click login");
    };

    const handlesubmit = (e) => {
        e.preventDefault();

        let data = {
            username: Id,
            password: Password,
        };

        console.log(data);
        axios
            .post("http://api.doranssam.com/auth/login", data)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                localStorage.setItem("refreshToken", res.data["refreshToken"]);
                setCookie("accessToken", res.data["accessToken"]);
                navigate("/");

                // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
                axios.defaults.headers.common[
                    "Authorization"
                ] = `Bearer ${res.data["accessToken"]}`;
                // ${res.payload.accessToken}
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <GlobalStyle backColor="yellow" />
            <Header isIcon isSignup backColor="yellow" />
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

                    <LoginUI>
                        <form onSubmit={handlesubmit}>
                            <div className="loginform">
                                <div className="column">
                                    <label className="content">아이디</label>
                                    <Input
                                        className="input"
                                        type="id"
                                        value={Id}
                                        onChange={handleId}
                                    />
                                </div>
                                <div className="column">
                                    <label className="content">비밀번호</label>
                                    <Input
                                        className="input"
                                        type="password"
                                        value={Password}
                                        onChange={handlePasswrd}
                                    />
                                </div>
                                <br />
                                <Button
                                    buttonText="로그인"
                                    type="submit"
                                    outputColor="red"
                                    className="content_button"
                                    onClick={onClickLogin}
                                ></Button>
                            </div>
                        </form>
                    </LoginUI>
                </div>
                <div className="rightSide">
                    <BigDoran>
                        <img
                            className="bigDoran"
                            src="/img/big-doran-heart-left.png"
                        />
                    </BigDoran>
                </div>
            </MainBlock>
        </>
    );
};

export default Loginpage;
