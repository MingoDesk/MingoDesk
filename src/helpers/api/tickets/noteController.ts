import { patch, IReturn } from '../requestGenerator';
import { baseUrl } from '../../../config/config.json';
const endpoint = `${baseUrl}/tickets/notes`;

export const createNote = async (ticketId: string, text: string): Promise<IReturn> => {
  const data = await patch(`${endpoint}/new`, { params: { ticketId, text }, data: { withCredentials: true } });
  return data;
};

export const editNote = async (ticketId: string, noteId: string, text: string): Promise<IReturn> => {
  const data = await patch(`${endpoint}/edit`, { params: { ticketId, noteId, text }, data: { withCredentials: true } });
  return data;
};
