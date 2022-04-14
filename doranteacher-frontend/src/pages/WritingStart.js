import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../components/Button";
import { signupUser } from "../_actions/user_action";
import styled, { css, createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import GlobalStyle from "../components/GlobalStyle";

const MainBlock = styled.div`
    background: #f9de4b;
`;

function WritingStart() {
    return (
        <>
            <GlobalStyle backColor="red" />
            <Header isProgress isLogout isImgBtn text="1.일기시작" />
        </>
    );
}

export default WritingStart;
