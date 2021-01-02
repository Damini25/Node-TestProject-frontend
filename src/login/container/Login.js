import React, { useState } from 'react';
import LogInComponent from '../component/Login';
import { useSelector, useDispatch } from 'react-redux';
import * as Actions from '../../common/store/actions/actionIndex';

const LogInContainer = () => {
    const userDetails = useSelector(state => state.loginReducer.userDetails);
    const dispatch = useDispatch();

    const handleOnChange = (e) => {
        dispatch(Actions.updateLoginForm({
            ...userDetails,
            [e.target.name]: e.target.value
        }))
    }
    
    const onLogin=()=>{
        console.log('form',userDetails);
        dispatch(Actions.onUserLogin(userDetails));
    }

    return <LogInComponent
        handleOnChange={handleOnChange}
        email={userDetails.email}
        password={userDetails.password}
        login={onLogin}
    >
    </LogInComponent>
}
export default LogInContainer;