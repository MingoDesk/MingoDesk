<template>
  <main class="ticket-view-container">
    <ul>
      <li v-for="message in ticket.messages" :key="message.id">
        <Message :message="message" />
      </li>
    </ul>
  </main>
</template>

<script lang="ts">
import { defineComponent, PropType, watchEffect } from 'vue';
import { getTicket } from '../../helpers/api/tickets/ticketController';
import Message from './Message.vue';
import { IMessage } from '../../@types/ticket';
import { ticketStore } from '../../helpers/stores/ticketStore';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'TicketView',
  components: { Message },
  props: {
    ticketId: { type: String, required: true },
    subject: { type: Object as PropType<IMessage['subject']>, required: true },
    author: { type: String, required: true },
  },
  setup(props) {
    const ticketState = ticketStore();

    watchEffect(async () => {
      const data = await getTicket(props.ticketId);
      ticketState.setTicket(data.response.data);
    });

    return {
      ticket: storeToRefs(ticketState).ticket,
    };
  },
});
</script>

<style lang="scss" scoped>
@use '../../scss/colors' as c;

.ticket-view-container {
  width: 50vw;
  min-width: 30vw;
  max-width: 55vw;
  padding: 1rem;
  background: c.$ticket-modal-bg;
  border-radius: 4px;
}
</style>
