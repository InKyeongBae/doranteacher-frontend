import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signupUser } from "../_actions/user_action";

function Signuppage(props) {
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    const dispatch = useDispatch();

    // handler 함수들
    const onUsernameHandler = (event) => {
        setUsername(event.currentTarget.value);
    };

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value);
    };

    const onSubmitHandler = (event) => {
        // 태그의 기본 기능으로 리프레쉬 되는 것을 방지.
        event.preventDefault();

        if (Password !== ConfirmPassword) {
            return alert("비밀번호와 비밀번호 확인은 같아야 해요!");
        }

        let body = {
            username: Username,
            password: Password,
        };

        // action의 반환값을 dispatch해준다.
        dispatch(signupUser(body)).then((response) => {
            if (response.payload.loginSuccess) {
                props.history.push("/login");
            } else {
                alert("회원가입에 실패했어요.");
            }
        });
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100vh",
            }}
        >
            <form
                style={{ display: "flex", flexDirection: "column" }}
                onSubmit={onSubmitHandler}
            >
                <label>Username</label>
                <input
                    type="username"
                    value={Username}
                    onChange={onUsernameHandler}
                />
                <label>Password</label>
                <input
                    type="password"
                    value={Password}
                    onChange={onPasswordHandler}
                />
                <label>Confirm Password</label>
                <input
                    type="password"
                    value={ConfirmPassword}
                    onChange={onConfirmPasswordHandler}
                />

                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Signuppage;