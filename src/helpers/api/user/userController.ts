import { baseUrl } from '../../../config/config.json';
import { get, IReturn } from '../requestGenerator';
import { IUserPermissions } from '../../../@types/userPermissions';

export interface User {
  permissions: IUserPermissions['permissions'];
  systemOrganisationId: string;
  organisationId: string | null;
  sub: string;
  email: string;
  email_verified: boolean;
  locale: string;
  name: string;
  picture: string;
}

export const getUser = async (): Promise<IReturn> => {
  const user = await get(`${baseUrl}/user/`, { withCredentials: true });
  return user;
};
