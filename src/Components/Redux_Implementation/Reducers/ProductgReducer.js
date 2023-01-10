import {
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_LOADING,
    GET_PRODUCTS_ERROR,
} from "../ActionType/ProductActionType";

const initState = {
    loading: false,
    error: false,
    products: [],
};

function productReducer(state = initState, action) {
    switch (action.type) {
        case GET_PRODUCTS_LOADING: {
            return {
                loading: true,
                error: false,
                products: [],
            };
        }
        case GET_PRODUCTS_SUCCESS: {
            return {
                loading: false,
                error: false,
                products: action.payload,
            };
        }
        case GET_PRODUCTS_ERROR: {
            return {
                loading: false,
                error: true,
                products: [],
            };
        }
        default: {
            return state;
        }
    }
}

export default productReducer;
