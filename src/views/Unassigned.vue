<template>
  <ul v-if="metadata && metadata.data.length">
    <li v-for="data in metadata.data" :key="data._id">
      <MetaDataTicket :metadata="data" />
    </li>
  </ul>
</template>

<script lang="ts">
import { getUnassignedTickets } from '../helpers/api/tickets/ticketController';
import { defineComponent, onMounted, PropType, ref, toRefs } from 'vue';
import MetaDataTicket from '../components/MetaDataTicket.vue';
import { ITicketMetaData } from '../helpers/types/ticket';
import { login } from '../helpers/api/user/userController';

export default defineComponent({
  name: 'Unassigned',
  components: {
    MetaDataTicket,
  },
  props: {
    unnassignedTickets: { type: Array as PropType<Array<ITicketMetaData>> },
  },
  setup() {
    let responseRef = ref(null);

    onMounted(async () => {
      const { response, errors } = await getUnassignedTickets();

      if (errors && errors.value.response.status === 403) {
        login();
      }
      responseRef.value = response;
    });

    console.log(responseRef);
    return { metadata: responseRef };
  },
});
</script>

<style lang="scss">
@use '../scss/colors' as c;

body {
  background: c.$bg;
  margin: 0;
  padding: 0;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  padding-top: 0.5rem;
}

ul,
li {
  list-style: none;
}

#app {
  font-family: Sofia Pro, Roboto, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
