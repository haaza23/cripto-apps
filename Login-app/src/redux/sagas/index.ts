import { all } from 'redux-saga/effects';
import { watchUsers } from './user.sagas';

export default function* rootSaga(): Generator {
    yield all([
        watchUsers()
    ]);
}