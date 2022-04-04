import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../_actions/user_action';




const Login = (props) => {

    // redux의 dispatch
    const dispatch = useDispatch();

    // react hook에서 state 사용. 컴포넌트 안에 작성
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');

    // handler 함수들
    const onUsernameHandler = (event) => {
        setUsername(event.currentTarget.value);
    };

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };

    const onSubmitHandler = (event) => {
        // 태그의 기본 기능으로 리프레쉬 되는 것을 방지.
        event.preventDefault();

        let body = {
        username: Username,
        password: Password,
        };

        // action의 반환값을 dispatch해준다.
        dispatch(loginUser(body)).then((response) => {
        if (response.payload.loginSuccess) {
            props.history.push('/');
        } else {
            alert('Error');
        }
        });
    };

    return (
            <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100vh',
            }}
            >
            <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={onSubmitHandler}>
                <label>Username</label>
                <input type="username" value={Username} onChange={onUsernameHandler} />
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                <br />
                <button type="submit">Login</button>
            </form>
            </div>
        );
}

export default Login;
