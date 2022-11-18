import React, { useState, ChangeEvent, FunctionComponent } from 'react';
import { InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { IInputProps } from './types';
import { FormGroup, CustomInput, ErrorBlock } from './styles';

const Input: FunctionComponent<IInputProps> = (props: IInputProps) => {
  const {
    disabled = false,
    input,
    label = '',
    meta: { touched, error },
    onChangeInput,
    ref,
    size = 'medium',
    spacing = true,
    showError = true,
    variant = 'outlined',
    multiline = false,
  } = props;
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { onChange, type = 'text', value } = input;
  const isPasswordInput = type === 'password';
  const hasError = !!touched && !!error;

  const getInputType = () => {
    let inputType = type;
    if (isPasswordInput) {
      inputType = showPassword ? 'text' : type;
    }
    return inputType;
  };

  return (
    <FormGroup $spacing={spacing}>
      <CustomInput
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...input}
        disabled={disabled}
        error={hasError}
        label={label}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChange(event.target.value);
          // eslint-disable-next-line no-unused-expressions
          !!onChangeInput && onChangeInput(event.target.value);
        }}
        size={size}
        type={getInputType()}
        value={value}
        variant={variant}
        multiline={multiline}
        ref={ref}
        // eslint-disable-next-line react/jsx-no-duplicate-props
        InputProps={{
          endAdornment: isPasswordInput && (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      {showError && <ErrorBlock>{hasError ? error : ' '}</ErrorBlock>}
    </FormGroup>
  );
};

export default Input;