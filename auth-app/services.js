import { get, post } from './api';

export async function getSecret() {
  const response = await get('generate-token');
  return response;
}

export async function generate(formdata) {
  const response = await post('register-service', formdata);
  return response;
}

