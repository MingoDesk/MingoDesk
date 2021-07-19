<template>
  <section class="CreateTicket">
    <form @submit.prevent="submitted">
      <label for="ticketId">ticketId</label>
      <input v-model="ticketId" type="text" name="ticketId" />
      <input v-model="noteId" type="text" name="noteId" />
      <button>Edit note on ticket</button>
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
import { editNote } from '../../../composables/ticketController';

export default {
  name: 'AddNoteToTicket',
  setup() {
    const { data, ticketId, noteId, submitted, error, fetching } = editNote();

    return {
      data,
      submitted,
      error,
      fetching,
      ticketId,
      noteId,
    };
  },
  data() {
    return {
      name: 'AddNoteToTicket.vue',
    };
  },
};
</script>

<style scoped lang="scss"></style>
