<template>
  <section class="CreateTicket">
    <form @submit.prevent="submitted">
      <label for="ticketId">ticketId</label>
      <input v-model="val" type="text" name="ticketId" />
      <button>Reply to the ticket</button>
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
import { replyTicket } from "../../composables/ticketController";

export default {
  name: "ReplyTicket",
  setup() {
    const { data, val, submitted, error, fetching } = replyTicket();

    return {
      data,
      submitted,
      error,
      fetching,
      val,
    };
  },
  data() {
    return {
      name: "ReplyTicket.vue",
    };
  },
};
</script>

<style scoped lang="scss"></style>
