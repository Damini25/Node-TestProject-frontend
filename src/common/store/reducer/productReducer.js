import * as ActionTypes from '../actions/actionTypes';
const initialState = {
    productList: [],
    productDataToEdit:{
        title:'',
        desc:'',
        price:'',
        imageUrl:''
    }
}
const productReducer = (state = initialState, action) => {
   // console.log('in product reducer',state,action);
    switch (action.type) {
        case ActionTypes.LOAD_PRODUCTS_LIST: {
            return {
                ...state, productList: [...action.data]
            }
        }
        case ActionTypes.GET_PRODUCT_DATA:{
            return{
                ...state,productDataToEdit:{...action.data}
            }
        }
        case ActionTypes.EDIT_PRODUCT_DATA:{
            const updatedData={...state.productDataToEdit};
            updatedData[action.data.name]=action.data.value;
            return{
                ...state,productDataToEdit:{...updatedData}
            }
        }

        default: {
            return state;
        }
    }
}
export default productReducer;