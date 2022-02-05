import { post, IReturn } from '../requestGenerator';
import { baseUrl } from '../../../config/config.json';

export const getCdnToken = async (ticketId: string): Promise<IReturn> => {
  const user = await post(`${baseUrl}/auth/content-token`, { ticketId });
  return user;
};
