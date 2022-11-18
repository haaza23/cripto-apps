export interface IInputProps {
  disabled?: boolean;
  input: {
    onChange: (value: string) => void;
    type?: string;
    value: string;
  };
  label?: string;
  meta: {
    touched?: boolean;
    error?: string;
  };
  onChangeInput?: (value: string) => void;
  rows?: number;
  rowsMax?: number;
  size?: 'medium' | 'small' | undefined;
  variant?: 'outlined' | 'standard' | 'filled' | undefined;
  spacing?: boolean;
  showError?: boolean;
  ref?: any;
  multiline?: boolean;
}

export interface IFormGroupProps {
  $spacing: boolean;
}