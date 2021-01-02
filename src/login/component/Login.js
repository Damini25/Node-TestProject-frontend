import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Login.scss';

const LogInComponent=({email,password,login,handleOnChange})=>{
    return  (
        <div className="login-main">
            <h4>Please Login</h4>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" value={email} onChange={handleOnChange} placeholder="Enter an email"/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="text" id="password" name="password" onChange={handleOnChange} value={password} placeholder="Enter Password"/>
            </div>
            <button onClick={login}>Login</button>
        </div>
    );
}

export default LogInComponent;
LogInComponent.propTypes = {
    email: PropTypes.any,
    password: PropTypes.any,
    login: PropTypes.func,
    handleOnChange:PropTypes.func
}