import React from 'react';
import { login } from '../../store/session';
import { useDispatch } from 'react-redux'

const DemoLogin = () => {
    const dispatch = useDispatch()
    const demoUser = {
        credential: 'Demo-lition',
        password: 'password'
    }

    return (
        <button
        onClick={() => dispatch(login(demoUser))}
        >Demo Login</button>
    )
};

export default DemoLogin;