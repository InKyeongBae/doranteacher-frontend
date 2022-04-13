import React from "react";
import styled, { css } from "styled-components";

const ColorStyles = css`
    ${({ theme, inputColor, outputColor }) => {
        const incolor = theme.palette[inputColor];
        const outcolor = theme.palette[outputColor];
        return css`
            color: black;
            background: ${incolor};
            &:hover {
                background: ${outcolor};
            }
        `;
    }}
`;

const HeaderButtons = styled.div`
    button {
        min-width: 160px;
        font-size: 25px;
        height: 42.5px;
        ${ColorStyles};
        outline: 0;
        border: 0;
        letter-spacing: 1px;
        cursor: pointer;
        position: relative;
        padding: 3px 35px;
        font-family: "상상토끼 꽃집막내딸 OTF";
        font-style: normal;
        font-weight: 400;
        border-radius: 25px;
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
            width: 98%;
            height: 98%;
            position: absolute;
            background: white;
            transform: translate3d(0.2em, 0.15em, 1em);
            border-radius: 25px;
            border: 2px solid black;
            transition: transform 0.2s cubic-bezier(0, 0, 0.7, 1);
            &:active {
                z-index: -1;
            }
        }

        &:hover {
            transition: all 0.1s cubic-bezier(0, 0, 0.7, 1);
            top: 4px;
            left: 3.5px;
            &:before {
                top: -5.5px;
                left: -4.7px;
            }
        }
    }
`;

function Button({ buttonText, ...rest }) {
    return (
        <HeaderButtons {...rest}>
            <button className="button">{buttonText}</button>
        </HeaderButtons>
    );
}

Button.defaultProps = {
    inputColor: "yellow",
    outputColor: "red",
};

export default Button;
