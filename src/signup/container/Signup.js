import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Actions from '../../common/store/actions/actionIndex';
import SignupComponent from '../component/Signup';

const SignupContainer = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        password: ''
    })
    const dispatch = useDispatch();

    const handleOnChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const onSignUp = () => {
        console.log('form', formValues);
        dispatch(Actions.onSignUp(formValues));
    }

    return <SignupComponent
        handleOnChange={handleOnChange}
        name={formValues.name}
        email={formValues.email}
        password={formValues.password}
        signUp={onSignUp}
    >
    </SignupComponent>
}
export default SignupContainer;