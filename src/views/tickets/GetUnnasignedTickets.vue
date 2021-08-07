<template>
  <section class="unnasigned-tickets">
    <form @submit.prevent="submitted">
      <button>Get unnasigned tickets</button>
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
import { getUnnasigedTickets } from '../../composables/ticketController';

export default {
  name: 'CreateTicket',
  setup() {
    const { data, submitted, error, fetching } = getUnnasigedTickets();

    return {
      data,
      submitted,
      error,
      fetching,
    };
  },
  data() {
    return {
      name: 'GetUnnasignedTickets.vue',
    };
  },
};
</script>

<style scoped lang="scss"></style>
