import * as actionTypes from './actionTypes';
import axios from '../../shared/axios-setup';

export const login = (username, pass) => {
    const authData = {
        email: username,
        password: pass,
        returnSecureToken: true
    };

    let authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD5S1jzJDCNqYn8jhx4kU4WG9gy7hFXO3Q';

    return dispatch => {
        axios.post(authUrl, authData)
            .then(response => {
                localStorage.setItem('userToken', response.data.idToken);
                localStorage.setItem('userId', username);
                dispatch(loginSuccess(response.data.idToken, username));
            })
            .catch(error => {
                if(error.response) {
                    let errorMsg = error.response.data.error.message;

                    if(errorMsg === 'INVALID_EMAIL') {
                        dispatch(loginFailed('User not found'));
                    } else if(errorMsg === 'INVALID_PASSWORD') {
                        dispatch(loginFailed('Incorrect login details'));
                    } else {
                        dispatch(authFailed());
                    }
                } else {
                    dispatch(authFailed());
                }
            });
    };
};

export const loginSuccess = (token, userId) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        token: token,
        userId: userId
    };
};

export const loginFailed = (errorMsg) => {
    return {
        type: actionTypes.LOGIN_FAILED,
        errorMsg: errorMsg
    };
};

export const authFailed = () => {
    return {
        type: actionTypes.AUTH_FAILED
    };
};

export const authCheckState = () => {
    return dispatch => {
        let userToken = localStorage.getItem('userToken') != null ? localStorage.getItem('userToken') : '';
        let userId = localStorage.getItem('userId') != null ? localStorage.getItem('userId') : '';
        dispatch(loginSuccess(userToken, userId));
    };
};