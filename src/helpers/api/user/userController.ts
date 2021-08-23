import { baseUrl } from '../../../config/config.json';

export const login = (): void => {
  window.location.replace(`${baseUrl}/login`);
};

export const logout = () => {
  window.location.replace(`${baseUrl}/logout`);
};
