<template>
  <section class="create-organisation">
    <form @submit.prevent="submitted">
      <button>Create a new organisation</button>
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
import { createOrganisation } from '../../composables/organisationController';

export default {
  name: 'CreateOrganisation',
  setup() {
    const { data, submitted, error, fetching } = createOrganisation();

    return {
      data,
      submitted,
      error,
      fetching,
    };
  },
  data() {
    return {
      name: 'CreateOrganisation.vue',
    };
  },
};
</script>

<style scoped lang="scss"></style>
