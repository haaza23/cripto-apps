import { AnyAction } from 'redux';
import { ILoginFormData } from '../../views/Login/types';
import * as constants from '../constants/user.constants';

export function onLoginRequested(formData: ILoginFormData): AnyAction {
    return {
        type: constants.USER_ON_LOGIN_REQUESTED,
        formData
    };
}

export function onLoginSucceeded(data: unknown): AnyAction {
    return {
        type: constants.USER_ON_LOGIN_SUCCEEDED,
        data
    };
}

export function onLoginFailed(error: unknown): AnyAction {
    return {
        type: constants.USER_ON_LOGIN_FAILED,
        error
    };
}

// onValidate
export function onValidate(formData: any): AnyAction {
    return {
        type: constants.USER_ON_VALIDATE_REQUESTED,
        formData
    };
}

export function onValidateSucceeded(data: unknown): AnyAction {
    return {
        type: constants.USER_ON_VALIDATE_SUCCEEDED,
        data
    };
}

export function onValidateFailed(error: unknown): AnyAction {
    return {
        type: constants.USER_ON_VALIDATE_FAILED,
        error
    };
}

// onGet2FA
export function onGet2FA(): AnyAction {
    return {
        type: constants.USER_ON_GET_2FA_REQUESTED
    };
}

export function onGet2FASucceeded(data: unknown): AnyAction {
    return {
        type: constants.USER_ON_GET_2FA_SUCCEEDED,
        data
    };
}

export function onGet2FAFailed(error: unknown): AnyAction {
    return {
        type: constants.USER_ON_GET_2FA_FAILED,
        error
    };
}
