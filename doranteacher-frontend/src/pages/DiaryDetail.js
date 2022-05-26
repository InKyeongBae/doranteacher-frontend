import React, { useState } from "react";
import styled, { css, createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import Button from "../components/Button";
import GlobalStyle from "../components/GlobalStyle";
import { useNavigate, Link } from "react-router-dom";
import LeftDoran from "../components/LeftDoran";
import ProgressBar from "../components/ProgressBar";
import ImageUpload from "../components/ImageUpload";

const MainBlock = styled.div``;

function DiaryDetail() {
    // console.log(getStringDate(new Date()));
    const [comment, setComment] = useState(0);
    const [correct, setCorrect] = useState(0);
    const [painting, setPainting] = useState(0);
    const [file, setFile] = useState("");
    console.log(painting);

    const navigate = useNavigate("");
    return (
        <>
            <GlobalStyle backColor="yellow" />
            <Header isUndo />
        </>
    );
}

export default DiaryDetail;
