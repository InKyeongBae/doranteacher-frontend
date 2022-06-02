import React, { useState, useEffect } from "react";
import styled, { css, createGlobalStyle } from "styled-components";
import Header from "../../components/Header";
import Button from "../../components/Button";
import GlobalStyle from "../../components/GlobalStyle";
import { Helmet } from "react-helmet";
import { TypeHangul } from "type-hangul";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";
// const diary_img = process.env.PUBLIC_URL + `/img/diary_img.jpeg`;
const diary_img =
    process.env.PUBLIC_URL + `/img/image_recommend/hamburger_7.png`;
const doran_img = process.env.PUBLIC_URL + `/img/doran_half_1.png`;

const dummyData =
    // 서버로부터 데이터를 받아와야함
    {
        weather: "화창해요",
        date: "2022년 06월 02일",
        diaryType: "요리일기",
        keywords: ["#요리", "#햄버거", "#연필", "#냉장고", "#가족", "#일요일"],
        // 키워드도 json 배열 형태로 넘겨와야함
        title: "우리 햄버거로 장사해도 되겠다",
        text: "은서네 집에 가서 햄버거를 만들었다. 친구한테 같이 밥 먹자고 전화했는데 집에 와서 요리하자고 했다. 패티랑 양상추랑 토마토를 넣었다. 치즈도 많이 올렸다. 만들기는 정말 쉬웠는데 정말 정말 맛있었다! 내일은 내가 잘하는 짜파게티를 해주기로 했다. 맛있겠다!",
        before_text:
            "인경이랑 은서네 집에 가서 김치볶음밥을 만들었다. 친구한테 같이 밥 먹자고 전화했는데 집에 와서 요리하자고 했다. 김치랑 밥이랑 스팸을 넣었다. 계란후라이도 올렸다. 만들기는 정말 쉬웠는데 정말 정말 맛있었다! 내일은 내가 잘하는 짜파게티를 해주기로 했다. 맛있겠다!",
        isPrivate: true,
        comment: "맛이 없든 있든 좋을 것 같아요.",
        wantToCorrect: true,
        hasImage: true,
        // imagePath: "",
        // // 이미지 경로도 있어야함
    };

const MainBlock = styled.div`
    .main-wrapper {
        display: flex;
    }

    .leftside {
        display: flex;
        width: 650px;
        flex-direction: column;
    }
    .mini-header-wrapper {
        margin-top: 10px;
        display: flex;
    }

    .diaryType_button {
        cursor: default;
        pointer-events: none;
        padding-right: 10px;
        padding-left: 10px;
        margin-right: 5px;
        margin-left: 30px;
    }

    .keywords-wrapper {
        display: flex;
    }

    .keyword_button {
        font-size: 20px;
        cursor: default;
        pointer-events: none;
        padding-right: 3px;
        padding-left: 3px;
        margin-right: 5px;
        margin-left: 5px;
    }

    .diarycontents {
        position: relative;
        margin-top: 30px;
        margin-left: 20px;
        margin-right: 20px;
    }

    .correct_button {
        position: absolute;
        cursor: pointer;
        top: 2%;
        left: 70%;
        z-index: 1;
        font-size: 20px;
        line-height: 30px;
        height: 30px;
        border: 0;
        letter-spacing: 1px;
        cursor: pointer;
        padding: 0px 30px;
        font-family: "Cafe24Syongsyong";
        font-style: normal;
        font-weight: 400;
        border-radius: 25px;
        border: 2px solid black;
    }
    .correct_button_on {
        background-color: #d3d3d3;
        color: #e75244;
        border: 3px solid #e75244;
    }
    .contents-box {
        background-color: white;
        border-radius: 15px;
        display: flex;
        // align-items: center;
        align-self: flex-end;

        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
            rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    }

    .answers {
        padding: 40px;
        align-self: flex-end;
    }
    .answer {
        font-family: "Cafe24Syongsyong";
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 40px;
        word-wrap: break-word;
        /* padding: 7px 0; */
        text-decoration: underline;
        text-underline-offset: 17px;
        text-decoration-thickness: 2px;
        line-height: 60px;
        border-bottom: 2px solid black;
    }
    .content {
        font-family: "KOTRAHOPE";
        font-size: 35px;
        text-align: center;
    }

    .rightside {
        display: flex;
        flex-direction: column;
        margin-right: 25px;
    }
    .comment_button {
        font-size: 30px;
        color: white;
        margin-right: 25px;
        cursor: default;
        pointer-events: none;
        border-radius: 30px;
    }
    .comment-wrapper {
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .on {
        background: #e75244;
        transition: all 0.1s cubic-bezier(0, 0, 0.7, 1);
        top: 4px;
        left: 3.5px;
        &:before {
            top: -4px;
            left: -4.7px;
        }
    }

    .comment-title-wrapper {
        margin-top: 50px;
        margin-right: 30px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .comment-box {
        line-height: 50px;
        text-align: center;
        // margin-top: 20px;
        width: 420px;
        font-size: 25px;
        height: 50px;
        background-color: #f9de4b;
        outline: 0;
        border: 0;
        letter-spacing: 1px;
        // cursor: pointer;
        position: relative;
        padding: 3px 35px;
        font-family: "Cafe24Syongsyong";
        font-style: normal;
        font-weight: 400;

        border-radius: 20px;
        border: 2px solid black;
        transition: transform 0.2s cubic-bezier(0, 0, 0.7, 1);

        &:before {
            z-index: -1;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            background: white;
            transform: translate3d(0.2em, 0.15em, 1em);
            border-radius: 20px;
            border: 2px solid black;
            transition: transform 0.2s cubic-bezier(0, 0, 0.7, 1);
            &:active {
                z-index: -1;
            }
        }
    }
    .photo-box {
        text-align: center;
        margin-top: 20px;
        width: 420px;
        font-size: 25px;
        height: 300px;
        background-color: #f9de4b;
        outline: 0;
        border: 0;
        letter-spacing: 1px;
        // cursor: pointer;
        position: relative;
        padding: 3px 35px;
        font-family: "Cafe24Syongsyong";
        font-style: normal;
        font-weight: 400;

        border-radius: 20px;
        border: 2px solid black;
        transition: transform 0.2s cubic-bezier(0, 0, 0.7, 1);

        &:before {
            z-index: -1;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            background: white;
            transform: translate3d(0.2em, 0.15em, 1em);
            border-radius: 20px;
            border: 2px solid black;
            transition: transform 0.2s cubic-bezier(0, 0, 0.7, 1);
            &:active {
                z-index: -1;
            }
        }
    }
    .diary_img {
        margin-top: 30px;
        border-radius: 15px;
        transition: all 0.2s linear;
        // box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        //     rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        //     rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    }

    .diary_img:hover {
        transform: scale(1.28);
    }

    .mama {
        color: red;
    }

    #sub {
        font-size: 30px;
        text-decoration: none;
        line-height: 60px;
        border-bottom: 2px solid black;
    }
`;

function DiaryDetail2() {
    // console.log(getStringDate(new Date()));
    const [correct, setCorrect] = useState(false);
    console.log(correct);

    return (
        <>
            <GlobalStyle backColor="yellow" />

            <Header isUndoTemp />

            <MainBlock>
                <div className="main-wrapper">
                    <div className="leftside">
                        <div className="mini-header-wrapper">
                            <div className="diaryType-wrapper">
                                <Button
                                    buttonText={dummyData.diaryType}
                                    extraClassName="diaryType_button"
                                    inputColor="purple"
                                    width="130px;"
                                ></Button>
                            </div>
                            <div className="keywords-wrapper">
                                {dummyData.keywords.map((it, index) => (
                                    <div className="key" id={index}>
                                        <Button
                                            key={index}
                                            buttonText={it}
                                            width="120px;"
                                            inputColor="green"
                                            extraClassName="keyword_button"
                                        ></Button>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="diarycontents">
                            <div className="contents-box">
                                <div className="answers">
                                    <div className="answer" id="sub">
                                        날짜 | {dummyData.date}
                                    </div>
                                    <div className="answer" id="sub">
                                        날씨 | {dummyData.weather}
                                    </div>
                                    <div className="answer" id="sub">
                                        제목 | {dummyData.title}
                                    </div>
                                    {!correct ? (
                                        <div className="answer">
                                            {dummyData.text}
                                        </div>
                                    ) : (
                                        <div className="answer">
                                            {/* 은서네 집에 가서 햄버거를만들었다. 
											친구한테 같이 밥 먹자고 전화했는데 집에 와서 요리하자고 했다. 
											패티랑 양상추랑 토마토를 넣었다. 치즈도 많이 올렸다. 
											만들기는 정말 쉬웠는데 정말 정말 맛있었다! 
											내일은 내가 잘하는 짜파게티를 해주기로 했다. 맛있겠다! */}
                                            은서
                                            <span className="mama">
                                                내
                                            </span>{" "}
                                            집에 가서 햄버거를 만들었다.{" "}
                                            친구한테 같이 밥 먹자고 전화했는데
                                            집에 와서 요리하자고 했다. 패티랑
                                            양상추랑 토마토를{" "}
                                            <span className="mama">
                                                너었따.
                                            </span>{" "}
                                            치즈도 많이 올렸다. 만들기는 정말{" "}
                                            <span className="mama">시웠 </span>
                                            는데 정말 정말 맛있었다! 내일은 내가
                                            잘하는 짜파게티를 해주기로 했다.
                                            맛있겠다!
                                        </div>
                                    )}
                                </div>
                                {dummyData.wantToCorrect ? (
                                    <div
                                        className={[
                                            "correct_button",
                                            correct === true
                                                ? `correct_button_on`
                                                : "",
                                        ].join(" ")}
                                        onClick={() => setCorrect(!correct)}
                                    >
                                        맞춤법 비교
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="rightside">
                        <div className="comment-wrapper">
                            <div className="comment-title-wrapper">
                                <img
                                    src={doran_img}
                                    height="140"
                                    width="95"
                                    alt=""
                                ></img>
                                <div className="content">
                                    도란쌤의
                                    <br />
                                    코멘트
                                </div>
                            </div>
                            <div className="comment-box" id="target">
                                {dummyData.comment}
                            </div>
                            {/* <div id="target">안녕하세요.</div> */}
                            <Helmet>
                                <script>TypeHangul.type('#target');</script>
                            </Helmet>
                        </div>
                        <div className="photo-wrapper">
                            <div className="content">
                                📷 사진으로 보는 일기 📷
                            </div>
                            <div className="photo-box">
                                <img
                                    className="diary_img"
                                    src={diary_img}
                                    height="240"
                                    width="380"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </MainBlock>
        </>
    );
}

export default DiaryDetail2;
