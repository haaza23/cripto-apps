import { Reducer } from 'redux';
import * as constants from '../constants/user.constants';

const initialState = {
    loading: false,
    data: null,
    twoFA: '',
    validate: false,
    error: null,
};

const userReducer: Reducer = (state = initialState, action) => {
    const { type, data, error } = action;
    switch (type) {
        case constants.USER_ON_LOGIN_REQUESTED:
        case constants.USER_ON_GET_2FA_REQUESTED:
        case constants.USER_ON_VALIDATE_REQUESTED:
            return {
                ...state,
                loading: true
            };

        case constants.USER_ON_LOGIN_SUCCEEDED:
            return {
                ...state,
                loading: false,
                data,
            };
        case constants.USER_ON_GET_2FA_SUCCEEDED:
            return {
                ...state,
                loading: false,
                twoFA: data
            };
        case constants.USER_ON_VALIDATE_SUCCEEDED:
            return {
                ...state,
                loading: false,
                validate: true
            };

        case constants.USER_ON_LOGIN_FAILED:
        case constants.USER_ON_GET_2FA_FAILED:
        case constants.USER_ON_VALIDATE_FAILED:
            return {
                ...state,
                loading: false,
                validate: false,
                error
            };

        default:
            return state;
    }
}

export default userReducer;
