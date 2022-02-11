import { get, patch, post, IReturn } from '../requestGenerator';
import { baseUrl } from '../../../config/config.json';
import { JSONContent } from '@tiptap/core';
import { User } from '../../stores/userStore';
import { TicketStatus } from '../../../@types/ticket';

export const getTicket = async (ticketId: string): Promise<IReturn> => {
  const data = await get(`${baseUrl}/tickets/${ticketId}`, { withCredentials: true });
  return data;
};

export const getUnassignedTickets = async (status: TicketStatus): Promise<IReturn> => {
  const data = await get(`${baseUrl}/tickets/unassigned/feed`, {
    withCredentials: true,
    params: { status },
  });
  return { ...data };
};

export const getAssignedTickets = async (userId: string): Promise<IReturn> => {
  const data = await get(`${baseUrl}/tickets/assigned/feed`, { params: { userId }, withCredentials: true });
  return data;
};

export const getAuthoredTickets = async (userId: string): Promise<IReturn> => {
  const data = await get(`${baseUrl}/tickets/authored/feed`, { params: { userId }, withCredentials: true });
  return data;
};

export const replyTicket = async (ticketId: string, message: string): Promise<IReturn> => {
  const data = await patch(`${baseUrl}/tickets/reply`, {
    params: { ticketId, message },
    withCredentials: true,
  });
  return data;
};

export const getPersonalTickets = async (status: TicketStatus, providerId: User['providerId']): Promise<IReturn> => {
  const data = await get(`${baseUrl}/tickets/authored/feed/${providerId}`, {
    withCredentials: true,
    params: { status },
  });
  return { ...data };
};

export const createTicket = async (body: JSONContent, subject: string): Promise<IReturn> => {
  const data = await post(`${baseUrl}/tickets/new`, { body: { ...body }, subject });
  return data;
};

export const assignTicket = async (ticketId: string, userId: string): Promise<IReturn> => {
  const data = await patch(`${baseUrl}/tickets/asignee`, {
    params: { ticketId, userId },
    withCredentials: true,
  });
  return data;
};

export const setTicketSatisfaction = async (ticketId: string, satisfactionLevel: number): Promise<IReturn> => {
  const data = await patch(`${baseUrl}/tickets/satisfaction`, {
    params: { ticketId, satisfactionLevel },
    withCredentials: true,
  });
  return data;
};
