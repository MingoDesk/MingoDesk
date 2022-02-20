import { ITicketMetaData } from '../../@types/ticket';

export const getTicketOrTickets = (tickets: ITicketMetaData[]): string => {
  let returnStr = '';

  const ticketOrTickets = tickets.length < 2 ? 'ticket' : 'tickets';
  returnStr = `You have ${tickets.length} open ${ticketOrTickets}`;

  return returnStr;
};
