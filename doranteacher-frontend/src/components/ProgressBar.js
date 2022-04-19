import styled, { ThemeConsumer, ThemeProvider } from "styled-components";

const MainBlock = styled.div`
    width: 750px;
    font-size: 25px;
    height: 35px;
    color: black;
    background: #f9de4b;
    outline: 0;
    border: 0;
    margin: 0;
    display: flex;
    align-items:center;
    letter-spacing: 1px;
    position: relative;
    font-family: "상상토끼 꽃집막내딸 OTF";
    font-style: normal;
    font-weight: 300;
    letter-spacing: 3px;
    border-radius: 25px;
    text-align: left;
    border: 2px solid black;
    transition: transform 0.2s cubic-bezier(0, 0, 0.7, 1);
    }
    &:before {
        z-index: -1;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        content: "";
        width: 99.5%;
        height: 99%;
        position: absolute;
        background: white;
        transform: translate3d(0.2em, 0.15em, 1em);
        border-radius: 25px;
        border: 2px solid black;
    }

    .progressText {
        padding-left:40px;
        align-self:center;
        
    }
}`;

const Container = styled.div`
    margin: 10px auto;
    background-color: ${(props) => props.progressColor};
    width: 550px;
    height: 15px;
    display: flex;
    align-items: center;
    border-radius: 20px;
`;

const Progress = styled.div`
    background-color: white;
    width: ${(props) => props.progressWidth}%;
    height: 115%;
    border: 2px solid black;
    transition: width 1s;
    border-radius: 20px;
`;

function ProgressBar({ progressText, progressWidth, progressColor }) {
    return (
        <>
            <MainBlock>
                <div className="progressText">{progressText}</div>
                <Container progressColor={progressColor}>
                    <Progress progressWidth={progressWidth} />
                </Container>
            </MainBlock>
        </>
    );
}

export default ProgressBar;
