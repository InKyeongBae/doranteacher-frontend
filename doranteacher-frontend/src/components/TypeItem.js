import React from "react";
import styled, { css } from "styled-components";

const TypeItems = styled.div`
    // margin-right: 20px;
    .text {
        font-family: "116angduk_honesty1.5";
        color: black;
        font-weight: lighter;
        font-style: normal;
        font-size: 22px;
    }
    .typeItem {
        cursor: pointer;

        border-radius: 25px;

        display: flex;
        flex-direction: column;
        justify: center;
        align-items: center;

        width: 110px;
        height: 150px;
        background: #f9de4b;
        outline: 0;
        border: 0;
        letter-spacing: 1px;
        position: relative;
        padding: 3px 35px;

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
            border-radius: 25px;
            border: 2px solid black;
            transition: transform 0.2s cubic-bezier(0, 0, 0.7, 1);
            &:active {
                z-index: -1;
            }
        }

        &:hover {
            background: #5dcb83;
            transition: all 0.1s cubic-bezier(0, 0, 0.7, 1);
            top: 4px;
            left: 3.5px;
            &:before {
                top: -4px;
                left: -4.7px;
            }
        }
    }

    .typeItem_on {
        background: #5dcb83;
        transition: all 0.1s cubic-bezier(0, 0, 0.7, 1);
        top: 4px;
        left: 3.5px;
        &:before {
            top: -4px;
            left: -4.7px;
        }
    }
`;

function TypeItem({ type_id, type_name, onClick, isSelected }) {
    return (
        <TypeItems>
            <div
                onClick={() => onClick(type_id)}
                className={["typeItem", isSelected ? `typeItem_on` : ""].join(
                    " "
                )}
            >
                <span className="text">{type_name}</span>
            </div>
        </TypeItems>
    );
}

export default TypeItem;
