import * as actionTypes from './actionTypes';
import axios from '../../shared/axios-setup';

export const login = (username, pass) => {
    return dispatch => {
        axios.get('admin_users/'+username+'.json')
            .then(response => {
                if(response.data === null || response.data === undefined) {
                    axios.get('users/'+username+'.json')
                        .then(response => {
                            if(response.data === null || response.data === undefined) {
                                dispatch(loginFailed('User not found'));
                            } else if(response.data.password === pass) {
                                dispatch(loginSuccess());
                            } else {
                                dispatch(loginFailed('Incorrect login details'));
                            }
                        })
                        .catch(error => {
                            dispatch(authFailed());
                        });
                } else if(response.data.password === pass) {
                    dispatch(loginSuccess());
                } else {
                    dispatch(loginFailed('Incorrect login details'));
                }
            })
            .catch(error => {
                dispatch(authFailed());
            });
    };
};

export const loginSuccess = () => {
    return {
        type: actionTypes.LOGIN_SUCCESS
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