<template>
  <main class="ticket-view-container">
    <ul>
      <li v-for="message in messages" :key="message.id">
        <p>Testing {{ messages }}</p>
        <Message :message="message" />
      </li>
    </ul>
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref } from 'vue';
import { getTicket } from '../../helpers/api/tickets/ticketController';
import Message from './Message.vue';
import { IReturn } from '../../helpers/api/requestGenerator';
import { IMessage } from '../../@types/ticket';

export default defineComponent({
  name: 'TicketView',
  components: { Message },
  props: {
    ticketId: { type: String, required: true },
    subject: { type: Object as PropType<IMessage['subject']>, required: true },
    author: { type: String, required: true },
  },
  setup(props) {
    const messages = ref<IReturn['response']>([]);
    const title = ref<IReturn['response']>([]);

    onMounted(async () => {
      const data = await getTicket(props.ticketId);
      messages.value = data.response.data.messages;
    });

    return {
      messages,
      title,
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
}
</style>
