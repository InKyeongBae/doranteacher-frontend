import React from "react";
import styled, { ThemeConsumer, ThemeProvider } from "styled-components";
import Button from "./Button";
import ImgButton from "./ImgButton";
import Progressbar from "./Progressbar";
import { useNavigate, Link } from "react-router-dom";

const HeaderBlock = styled.div`
    position: sticky;
    top: 0;
    color: black;
    padding: 20px 50px 15px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .link {
        text-decoration: none;
        color: black;
        &:focus,
        &:hover,
        &:visited,
        &:link,
        &:active {
            text-decoration: none;
            color: black;
        }
        cursor: pointer;
    }
`;

const HeaderIcon = styled.div`
    
    .doranIcon {
        height: 45px;
        vertical-align: middle;
        padding-bottom: 5px;
    }
    .doranIconName {
        font-family: "Cafe24 Ssurround";
		font-color:black
        font-style: normal;
        font-weight: 700;
        font-size: 33px;
        padding-left: 5px;
        vertical-align: middle;
    }
`;

const HeaderButtons = styled.div`
    display: flex;
    div {
        display: inline-block;
        padding-left: 20px;
        padding-bottom: 5px;
    }
`;

// const Link = styled(div)``;

function Header({
    isIcon,
    isProgress,
    isSignup,
    isLogin,
    isLogout,
    isSetting,
    isUndo,
    progress,
}) {
    const navigate = useNavigate();
    return (
        <HeaderBlock>
            <HeaderIcon className="mainIcon">
                <>
                    <div className="link" onClick={() => navigate("/")}>
                        {isIcon ? (
                            <>
                                <img
                                    className="doranIcon"
                                    src="/img/header-doran-face.png"
                                />
                                <span className="doranIconName">도란쌤</span>
                            </>
                        ) : (
                            <img
                                className="doranIcon"
                                src="/img/doranlogo.png"
                            />
                        )}
                    </div>
                </>
            </HeaderIcon>

            <HeaderButtons className="mainHeader">
                <div>
                    {isProgress ? (
                        <div>{progress}</div>
                    ) : // <Progressbar progressText={rest}></Progressbar>
                    null}
                </div>
                {isSignup ? (
                    <Button
                        buttonText="회원가입"
                        outputColor="red"
                        onClick={() => navigate("/signup")}
                    ></Button>
                ) : null}
                {isLogin ? (
                    <Button
                        buttonText="로그인"
                        outputColor="purple"
                        onClick={() => navigate("/login")}
                    ></Button>
                ) : null}
                {isLogout ? (
                    <Button buttonText="로그아웃" outputColor="purple"></Button>
                ) : null}
                {isSetting ? (
                    <ImgButton
                        setting={true}
                        undo={false}
                        outputColor="white"
                        onClick={() => navigate("/setting")}
                    ></ImgButton>
                ) : null}

                {isUndo ? (
                    <ImgButton
                        setting={false}
                        undo={true}
                        outputColor="white"
                        onClick={() => navigate(-1)}
                    ></ImgButton>
                ) : null}
            </HeaderButtons>
        </HeaderBlock>
    );
}

export default Header;
