<template>
  <section class="CreateTicket">
    <form @submit.prevent="submitted">
      <button>Create a new ticket</button>
    </form>
    <div v-if="fetching"><h2>Sending...</h2></div>
    <div class="result">
      <ul>
        <p>{{ data }}</p>
      </ul>
    </div>
  </section>
</template>

<script>
import { createTicket } from '../../composables/ticketController';

export default {
  name: 'CreateTicket',
  setup() {
    const { data, submitted, error, fetching } = createTicket();

    return {
      data,
      submitted,
      error,
      fetching,
    };
  },
  data() {
    return {
      name: 'CreateTicket.vue',
    };
  },
};
</script>

<style scoped lang="scss"></style>
