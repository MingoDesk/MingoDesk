<template>
  <section class="CreateTicket">
    <form @submit.prevent="submitted">
      <button>Create a new ticket</button>
    </form>
    <div v-if="fetching"><h2>Fetching Data!</h2></div>
    <div class="search-results">
      <ul>
        <p>{{ data }}</p>
      </ul>
    </div>
  </section>
</template>

<script>
import useTicket from "../../composables/use-ticket";

export default {
  name: "CreateTicket",
  setup() {
    const { data, submitted, error, fetching } = useTicket();

    return {
      data,
      submitted,
      error,
      fetching,
    };
  },
  data() {
    return {
      name: "CreateTicket.vue",
    };
  },
};
</script>

<style scoped lang="scss"></style>
