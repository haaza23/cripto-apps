import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import Validate from 'views/Validate/Validate';
import { onValidate } from '../redux/actions/user.actions';
const ValidateContainer: FunctionComponent = () => {
  const dispatch = useDispatch();

  const onValidateClick = (formData: any) => {
    const body = {
      totp: formData.token,
    }
    dispatch(onValidate(body));
  }

  return <Validate onValidateClick={onValidateClick}  />;
}

export default ValidateContainer;
