import styled from 'styled-components';
import TextField from '@mui/material/TextField';

import { IFormGroupProps } from './types';

export const FormGroup = styled.div<IFormGroupProps>`
  width: 100%;
  position: relative;
`;

export const CustomInput = styled(TextField)`
  width: 100%;
  height: fit-content;
  margin-bottom: 0px !important;
  background-color: #ffffff;
  label {
    display: flex;
    font-size: 14px;
    span {
      display: none;
    }
  }
  .MuiFormLabel-root.Mui-focused {
    color: #ffffff;
  }
  .MuiInputBase-input {
    font-size: 14px;
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill::first-line,
    &:-webkit-autofill:focus {
      -webkit-background-clip: text;
      font-size: 14px;
    }
  }
  .MuiOutlinedInput-input {
    padding: 15px 14px;
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #000000 ;
  }
  .MuiInput-underline:after {
    border-bottom-color: #000000;
  }
  .MuiInputLabel-outlined {
    z-index: auto;
  }
`;

export const ErrorBlock = styled.div`
  width: 100%;
  height: 15px;
  margin-top: 5px;
  font-size: 13px;
  line-height: 1.5;
  color: red;
  text-align: left;
`;