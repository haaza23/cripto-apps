import * as userConstants from 'redux/constants/user.constants';
import history from 'helpers/history';

const redirectMiddleware = () => (next: any) => (action: any) => {
    const { type } = action;
    switch (type) {
        case userConstants.USER_ON_LOGIN_SUCCEEDED:
            history.push('/validate');
            break;
        default:
            break;
    }
    return next(action);
};

export default redirectMiddleware;
