import { get, patch, IReturn } from './requestGenerator';
import { baseUrl } from '../../config/config.json';
const endpoint = `${baseUrl}/system`;

export interface IUpdateSystemSettings {
  tags: string[];
  ratings: boolean;
  snoozing: boolean;
  defaultTheme: 'light' | 'dark';
  allowNotesEdit: boolean;
  prefDataType: 'JSON' | 'CSV';
}

export const getSystemSettings = async (): Promise<IReturn> => {
  const data = await get(`${endpoint}/`, {});
  return data;
};

export const updateSystemSettigns = async (props: IUpdateSystemSettings): Promise<IReturn> => {
  const data = await patch(`${endpoint}/update`, { params: { ...props }, data: { withCredentials: true } });
  return data;
};
