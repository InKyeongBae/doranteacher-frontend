import React from "react";
import styled, { css } from "styled-components";
import Button from "./Button";

const TypeItems = styled.div`
    .typeItem {
        cursor: pointer;
        min-width: 160px;
        border-radius: 25px;

        display: flex;
        flex-direction: column;
        justify: center;
        align-items: center;
        font-size: 22px;
        line-height: 80px;
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

function TypeItem({ id, type_name, onClick, isSelected }) {
    return (
        <TypeItems>
            <div className="typeItem">
                <Button
                    onClick={() => onClick(id)}
                    width="100px"
                    height="90px"
                    extraClassName={[
                        "typeItem",
                        isSelected ? `typeItem_on` : "",
                    ].join(" ")}
                    buttonText={type_name}
                    outputColor="green"
                ></Button>
            </div>
        </TypeItems>
    );
}

export default TypeItem;
