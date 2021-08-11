import { get, patch, post, IReturn } from './requestGenerator';
import { baseUrl } from '../../config/config.json';
const endpoint = `${baseUrl}/organisation`;

export const createOrganisation = async (name: string, users: string[]): Promise<IReturn> => {
  const data = await post(`${endpoint}/new`, { params: { name, users }, data: { withCredentials: true } });
  return data;
};

export const getUserOrganisation = async (organisationId: string): Promise<IReturn> => {
  const data = await get(`${endpoint}/organisation/`, { params: { organisationId }, data: { withCredentials: true } });
  return data;
};

export const getOrganisations = async (): Promise<IReturn> => {
  const data = await get(endpoint, { data: { withCredentials: true } });
  return data;
};

export const updateOrganisation = async (organisationId: string, users: string[]): Promise<IReturn> => {
  const data = await patch(`${endpoint}/update`, {
    params: { organisationId, users },
    data: { withCredentials: true },
  });
  return data;
};
