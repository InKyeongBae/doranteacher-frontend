import React, { useState } from "react";
import styled, { css } from "styled-components";
import Button from "./Button";

function ImageUpload({ props }) {
    const [file, setFile] = useState("");

    // const onLoadFile = (e) => {
    //     const file = e.target.file;
    //     console.log(file);
    //     setFile(file);
    // };
    if (props === 2) {
        return (
            <>
                <input
                    type="file"
                    id="ex_file"
                    accept="image/jpg, image/png, image/jpeg"
                    onChange={(e) => console.log(e.target.files[0])}
                />
            </>
        );
    }
    return <></>;
}

export default ImageUpload;
