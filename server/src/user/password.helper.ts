import { createHmac } from 'crypto';

export const hashPassword = (password: string) => {
  return createHmac('sha256', password).digest('hex');
};
