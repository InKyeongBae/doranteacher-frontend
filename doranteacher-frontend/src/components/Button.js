import React from "react";
import styled, { css } from "styled-components";

const ColorStyles = css`
    ${({ theme, inputColor, outputColor, height, width }) => {
        const incolor = theme.palette[inputColor];
        const outcolor = theme.palette[outputColor];
        return css`
			color: black;
			background: ${incolor};
			&:hover {
				background: ${outcolor};
			}
			{height ? height: ${height} : ""}
			{width ? width: ${width} : ""}

		`;
    }}
`;

const HeaderButtons = styled.div`
    --yellow: #ffe800;
    --brown: #404040;
    /* --brown: white; */
    --angle: 0px;
    --angle-o: 0px;

    .button {
        top: 0;
        left: 0;
        transition: all 0.15s linear 0s;
        position: relative;
        display: inline-block;
        min-width: 160px;
        padding: 10px 25px;
        border-radius: 25px;
        border: 2px solid #404040;
        background-color: var(--yellow);
        ${ColorStyles};
        text-transform: uppercase;
        color: black;
        font-family: arial;
        letter-spacing: 1px;
        margin: 0 7px;

        box-shadow: -6px 6px 0 var(--brown);
        text-decoration: none;

        font-family: "Cafe24Syongsyong";
        font-style: normal;
        font-weight: 400;
        font-size: 25px;

        &:hover {
            top: 3px;
            left: -3px;
            box-shadow: -3px 3px 0 var(--brown);

            &::after {
                top: 1px;
                left: -2px;
                width: var(--angle);
                height: var(--angle);
            }

            &::before {
                bottom: -2px;
                right: 1px;
                width: var(--angle);
                height: var(--angle);
            }
        }

        &::after {
            transition: all 0.15s linear 0s;
            content: "";
            position: absolute;
            top: 2px;
            left: -4px;
            width: var(--angle);
            height: var(--angle);
            background-color: var(--brown);
            transform: rotate(45deg);
            z-index: -1;
        }

        &::before {
            transition: all 0.15s linear 0s;
            content: "";
            position: absolute;
            bottom: -4px;
            right: 2px;
            width: var(--angle);
            height: var(--angle);
            background-color: var(--brown);
            transform: rotate(45deg);
            z-index: -1;
        }
    }

    // a.btn {
    //     position: relative;
    // }

    // a:active.btn {
    //     top: 6px;
    //     left: -6px;
    //     box-shadow: none;

    //     &:before {
    //         bottom: 1px;
    //         right: 1px;
    //     }

    //     &:after {
    //         top: 1px;
    //         left: 1px;
    //     }
    // }
`;

function Button({ buttonText, extraClassName, ...rest }) {
    const className = extraClassName ? "button " + extraClassName : "button";
    return (
        <HeaderButtons {...rest}>
            <button className={className}>{buttonText}</button>
        </HeaderButtons>
    );
}

// id="btn"

Button.defaultProps = {
    inputColor: "yellow",
    outputColor: "red",
    height: "42.5px",
};

export default Button;
