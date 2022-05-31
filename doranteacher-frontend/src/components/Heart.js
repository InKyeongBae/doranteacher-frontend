import React from "react";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

function Heart({ id }) {
    console.log(id);
    var heart_img;
    var width;
    if (id === 1) {
        heart_img = process.env.PUBLIC_URL + `/img/heart_2.png`;
    } else if (id === 2) {
        heart_img = process.env.PUBLIC_URL + `/img/heart_3.png`;
    } else if (id === 3) {
        heart_img = process.env.PUBLIC_URL + `/img/heart.png`;
        width = "30";
    }
    return (
        <div>
            <img
                className="heart"
                src={heart_img}
                height="30"
                width={width}
                alt=""
            />
        </div>
    );
}

export default Heart;
