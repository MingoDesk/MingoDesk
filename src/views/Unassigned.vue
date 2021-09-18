<template>
  <header>
    <div class="heading">
      <h1>Unassigned tickets</h1>
      <p v-if="!metadata || !metadata.data.length">Currently you have 0 unassigned tickets</p>
      <p v-else>Currently you have {{ metadata.data.length }} unassigned tickets</p>
    </div>
    <div class="controls">
      <Filter />
      <Search />
      <Logout />
    </div>
  </header>
  <ul v-if="metadata && metadata.data.length">
    <li v-for="data in metadata.data" :key="data._id">
      <MetaDataTicket :metadata="data" />
    </li>
  </ul>
</template>

<script lang="ts">
import { getUnassignedTickets } from '../helpers/api/tickets/ticketController';
import { defineComponent, onMounted, PropType, ref } from 'vue';
import MetaDataTicket from '../components/MetaDataTicket.vue';
import { ITicketMetaData } from '../@types/ticket';
import Search from '../components/Search.vue';
import Filter from '../components/Filter.vue';
import Logout from '../components/Logout.vue';

export default defineComponent({
  name: 'Unassigned',
  components: {
    MetaDataTicket,
    Search,
    Filter,
    Logout,
  },
  props: {
    unnassignedTickets: { type: Array as PropType<Array<ITicketMetaData>> },
  },
  setup() {
    let responseRef = ref(null);
    let tries = 0;

    const getData = async () => {
      if (tries > 3) return;

      const { response, errors } = await getUnassignedTickets();
      if (errors && errors.response.status === 403) {
        tries++;
      }
      responseRef.value = { ...response };
    };

    const getDataAtInterval = (seconds: number) => {
      setInterval(getData, seconds * 1000);
    };

    onMounted(async () => {
      getData();
    });

    getDataAtInterval(50);
    return { metadata: responseRef };
  },
});
</script>

<style lang="scss">
@use '../scss/colors' as c;

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;

  .heading {
    p {
      margin: 0.5rem 0;
    }
  }

  .controls {
    display: flex;
    .search,
    .logout {
      margin-left: 1rem;
    }
  }
}

body {
  background: c.$bg;
  margin: 0;
  padding: 0;
}

h1 {
  color: c.$text;
  margin-bottom: 0em;
}

p {
  color: c.$alt-text;
  margin: 0.5em 0 4.8em 0em;
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
