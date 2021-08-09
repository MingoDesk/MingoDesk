import { get, patch, post, IReturn } from './requestGenerator';
import { baseUrl } from '../../config/config.json';
const endpoint = `${baseUrl}/organisation`;

export const getOrganisation = async (organisationId: string): Promise<IReturn> => {
  const data = await get(endpoint, { params: { organisationId }, data: { withCredentials: true } });
  return data;
};
