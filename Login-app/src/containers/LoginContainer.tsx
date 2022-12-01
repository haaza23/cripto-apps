import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onGet2FA, onLoginRequested } from '../redux/actions/user.actions';
import Login from '../views/Login/Login';
import { ILoginFormData } from '../views/Login/types';

const LoginContainer: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { twoFA, loginError } = useSelector((state: any) => state.user);

  const onLoginClick = (formData: ILoginFormData) => {
    dispatch(onLoginRequested(formData));
  }

  const onClickGet2FA = () => {
    dispatch(onGet2FA());
  }

  return <Login onLoginClick={onLoginClick} onClickGet2FA={onClickGet2FA} twoFA={twoFA} loginError={loginError} />;
}

export default LoginContainer;
