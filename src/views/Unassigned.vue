<template>
  <Header :subheading="subheading" routeName="Unassigned tickets" />
  <ul v-if="metadata && metadata.data && metadata.data.length">
    <li v-for="data in metadata.data" :key="data._id">
      <MetaDataTicket :metadata="data" />
    </li>
  </ul>
  <section v-else class="no-tickets-container">
    <div class="inner-container">
      <div class="card-container">
        <div class="card">
          <h1>There aren't any<br />unassigned tickets 🥳</h1>
          <p>
            Well done! You currently don't have any unassigned tickets! Perhaps, now is a good time to check
            <a href="#">analytics?</a>
          </p>
        </div>
        <div class="square" aria-hidden="true"></div>
        <div class="square" aria-hidden="true"></div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref, Ref } from 'vue';
import MetaDataTicket from '../components/tickets/MetaDataTicket.vue';
import { ITicketMetaData } from '../@types/ticket';
import { baseUrl } from '../config/config.json';
import { get, IReturn } from '../helpers/api/requestGenerator';
import Header from '../components/Header.vue';

const subheading: Ref<string> = ref(`Currently you have 0 tickets`);
const tries: Ref<number> = ref(0);
const unassignedTickets: Ref<IReturn['response'] | null> = ref(null);

const getUnassignedTickets = async (): Promise<IReturn> => {
  const data = await get(`${baseUrl}/tickets/unassigned/feed`, { withCredentials: true });
  return { ...data };
};

const getData = async () => {
  if (tries.value > 3) return;
  const { response, errors } = await getUnassignedTickets();
  if (errors && errors.response.status === 403) return tries.value++;

  unassignedTickets.value = { ...response };
};

const getDataAtInterval = (seconds: number) => {
  setInterval(getData, seconds * 1000);
};

export default defineComponent({
  name: 'Unassigned',
  components: {
    MetaDataTicket,
    Header,
  },
  props: {
    unnassignedTickets: { type: Array as PropType<Array<ITicketMetaData>> },
  },
  setup() {
    onMounted(async () => {
      await getData();
      if (unassignedTickets.value && unassignedTickets.value.data && unassignedTickets.value.data.length) {
        const ticketOrTickets = unassignedTickets.value.data.length < 2 ? 'ticket' : 'tickets';
        subheading.value = `Currently you have ${unassignedTickets.value.data.length} ${ticketOrTickets}`;
      }
    });

    getDataAtInterval(50);
    return { metadata: unassignedTickets };
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
  z-index: 9999999999999999111;

  .heading p {
    margin: 0.5rem 0;
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

ul {
  margin: 0;
  padding: 0;
}

li {
  padding-top: 0.5rem;
  list-style: none;
}

#app {
  font-family: Sofia Pro, Roboto, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.no-tickets-container {
  width: 100%;
  height: 100%;
  pointer-events: none;

  .square {
    width: 10.125rem;
    height: 10.125rem;
    background: #3b3ecb;
    position: absolute;
    top: 0%;
    border-radius: 4px;
    right: 0%;
    transform: rotate(-21deg);
    z-index: -50;
  }

  .square:nth-child(2) {
    top: 50%;
    right: -3%;
  }

  .square:nth-child(3) {
    width: 11.25rem;
    height: 11.25rem;
    background: #6a6ce1;
    transform: rotate(40deg);

    top: -13%;
    left: -5%;
  }
}

.card-container {
  position: relative;
  width: 100%;
  max-width: 30rem;
  pointer-events: initial;
}

.inner-container {
  height: inherit;
  width: inherit;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  top: 0;
  height: 100vh;

  .card {
    background-color: c.$bg-purple;
    padding: 0.2rem 4rem;
    border-radius: 8px;
    text-align: center;

    h1 {
      margin-top: 20%;
    }

    p {
      margin-top: 5%;
    }

    a {
      color: c.$text-link;
    }
  }
}
</style>
