import * as constants from 'redux/constants/user.constants';
import { setCookie } from 'helpers/cookies';

const storageMiddleware = () => (next: any) => (action: any) => {
  const { data, type } = action;
  switch (type) {
    case constants.USER_ON_LOGIN_SUCCEEDED:
      const decoded: any = data.token;
      setCookie('accessToken', data.token, {
        path: '/',
        maxAge: decoded.exp,
      });
      break;
    default:
      break;
  }
  return next(action);
};

export default storageMiddleware;
