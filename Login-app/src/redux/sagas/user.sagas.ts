import { AnyAction } from "redux";
import { call, put, takeLatest, all } from "redux-saga/effects";
import { get2FA, login, validate } from "../../services/user.services";
import { onGet2FAFailed, onGet2FASucceeded, onLoginFailed, onLoginSucceeded, onValidateFailed, onValidateSucceeded } from "../actions/user.actions";
import * as constants from "../constants/user.constants";

export function* userLogin(action: AnyAction): Generator {
    try {
        const data: unknown = yield call(login, action.formData);
        yield put(onLoginSucceeded(data));
    } catch (error) {
        yield put(onLoginFailed(error));
    }
}

export function* userValidate(action: AnyAction): Generator {
    try {
        const { data }: any = yield call(validate, action.formData);
        yield put(onValidateSucceeded(data));
    } catch (error) {
        yield put(onValidateFailed(error));
    }
}

export function* userGet2FA(): Generator {
    try {
        const { data }: any = yield call(get2FA);
        yield put(onGet2FASucceeded(data));
    } catch (error) {
        yield put(onGet2FAFailed(error));
    }
}

export function* watchUsers(): Generator {
    yield all([
        takeLatest(constants.USER_ON_LOGIN_REQUESTED, userLogin),
        takeLatest(constants.USER_ON_VALIDATE_REQUESTED, userValidate),
        takeLatest(constants.USER_ON_GET_2FA_REQUESTED, userGet2FA),
    ]);
}