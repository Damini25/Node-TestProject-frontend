import React from 'react';
import PropTypes from 'prop-types';
import './Signup.scss';

const SignupComponent = ({ name,email, password, signUp, handleOnChange }) => {
    return (
        <div className="sigup-main">
            <h4>Please Sigup</h4>
            <div>
                <label htmlFor="name">Username</label>
                <input type="text" id="name" name="name" value={name} onChange={handleOnChange} placeholder="Enter username" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" value={email} onChange={handleOnChange} placeholder="Enter email" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="text" id="password" name="password" value={password} onChange={handleOnChange} placeholder="Enter password" />
            </div>
            {/* <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="text" id="confirmPassword" name="confirmPassword" onChange={handleOnChange} value={confirmPassword} placeholder="Confirm your Password" />
            </div> */}
            <button onClick={signUp}>Sign Up</button>
        </div>
    );
}

export default SignupComponent;
SignupComponent.propTypes = {
    name: PropTypes.any,
    email: PropTypes.any,
    password: PropTypes.any,
   // confirmPassword: PropTypes.any,
    signUp: PropTypes.func,
    handleOnChange: PropTypes.func
}