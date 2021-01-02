import * as ActionTypes from './actionTypes';

export const updateLoginForm = (data) => {
    return {
        type: ActionTypes.EDIT_LOGIN_FORM,
        data: data
    }
}

export const onUserLogin=(data)=>{
    return {
        type: ActionTypes.ON_LOGIN_CLICK,
        data: data
    } 
}

export const onSignUp=(data)=>{
    return{
        type:ActionTypes.ON_SIGNUP,
        data:data
    }
}