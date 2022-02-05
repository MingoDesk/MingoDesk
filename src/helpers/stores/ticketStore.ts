import { ref, Ref } from 'vue';
import { defineStore } from 'pinia';
import { ITicket, ITicketMetaData } from '../../@types/ticket';

export const isLoggedIn: Ref<boolean> = ref(false);

export const ticketStore = defineStore({
  id: 'ticket',
  state: () => ({
    ticket: {} as ITicket,
    metadata: [] as ITicketMetaData[],
  }),
  actions: {
    setMetadata(metadata: ITicketMetaData[]) {
      this.metadata = metadata;
    },
    setTicket(ticket: ITicket) {
      this.ticket = ticket;
    },
  },
});
