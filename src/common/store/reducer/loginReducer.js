import * as ActionTypes from '../actions/actionTypes';
const initialState = {
    userDetails:{
        email:'',
        password:''
    }
}

const loginReducer = (state = initialState, action) => {
   // console.log('in login reducer',state,action);
    switch (action.type) {
        case ActionTypes.EDIT_LOGIN_FORM: {
            return {
                ...state, userDetails: {...action.data}
            }
        }
        default: {
            return state;
        }
    }
}
export default loginReducer;