export function requiredValidation(value: string): undefined | string {
  return value ? undefined : 'Required';
}
