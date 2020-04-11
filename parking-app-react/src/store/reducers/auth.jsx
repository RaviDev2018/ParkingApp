import * as actionTypes from '../action/actionTypes';
import { updatedObject } from '../../shared/utility';

const initialState = {
    error: false,
    isLoggedIn: false,
    loginMsg: ''
};

const loginSuccess = (state, action) => {
    return updatedObject(state, {
        isLoggedIn: true,
        loginMsg: ''
    });
};

const loginFailed = (state, action) => {
    return updatedObject(state, {
        isLoggedIn: false,
        loginMsg: action.errorMsg
    });
};

const authFailed = (state, action) => {
    return updatedObject(state, {
        error: true
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS: return loginSuccess(state, action);
        case actionTypes.LOGIN_FAILED: return loginFailed(state, action);
        case actionTypes.AUTH_FAILED: return authFailed(state, action);
        default:
            return state;
    }
};

export default reducer;