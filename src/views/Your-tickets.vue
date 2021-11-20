<template>
  <header>
    <div class="heading">
      <h1>Your tickets</h1>
      <p v-if="!metadata || !metadata.data || !metadata.data.length">Currently you have 0 tickets</p>
      <p v-else>Currently you have {{ metadata.data.length }} tickets</p>
    </div>
    <div class="controls">
      <Filter />
      <Search />
      <Logout />
    </div>
  </header>
  <ul v-if="metadata && metadata.data && metadata.data.length">
    <li v-for="data in metadata.data" :key="data._id">
      <MetaDataTicket :metadata="data" />
    </li>
  </ul>
  <section v-else class="no-tickets-container">
    <div class="inner-container">
      <div class="card-container">
        <div class="card">
          <h1>You haven't created any<br />tickets yet</h1>
          <p>
            Hi Samantha, welcome to MingoDesk! To create a ticket, click the big blue button below or visit the
            <a href="#">FAQ?</a> if you need any assistance
          </p>
        </div>
        <Cta msg="Create a ticket" color="#4346d4" @click="handleCreateTicket" />
        <div class="square" aria-hidden="true"></div>
        <div class="square" id="blue" aria-hidden="true"></div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref, Ref } from 'vue';
import MetaDataTicket from '../components/MetaDataTicket.vue';
import { ITicketMetaData } from '../@types/ticket';
import Search from '../components/Search.vue';
import Filter from '../components/Filter.vue';
import Logout from '../components/Logout.vue';
import { baseUrl } from '../config/config.json';
import { get, IReturn } from '../helpers/api/requestGenerator';
import { user } from '../helpers/store/userStore';
import Cta from '../components/Cta.vue';
import { createTicket } from '../helpers/api/tickets/ticketController';

let tries: Ref<number> = ref(0);
let authoredTickets: Ref<IReturn | null> = ref(null);

const getPersonalTickets = async (): Promise<IReturn> => {
  const data = await get(`${baseUrl}/tickets/authored/feed?userId=${user.value!.response.user.providerId}`, {
    withCredentials: true,
  });
  return { ...data };
};

const getData = async () => {
  if (tries.value > 3) return;
  const { response, errors } = await getPersonalTickets();
  if (errors && errors.response.status === 403) return tries.value++;

  authoredTickets.value = { ...response };
};

const getDataAtInterval = (seconds: number) => {
  setInterval(getData, seconds * 1000);
};

export default defineComponent({
  name: 'Your-tickets',
  components: {
    MetaDataTicket,
    Search,
    Filter,
    Logout,
    Cta,
  },
  props: {
    unnassignedTickets: { type: Array as PropType<Array<ITicketMetaData>> },
  },
  setup() {
    onMounted(async () => {
      getData();
    });

    getDataAtInterval(50);
    return { metadata: authoredTickets };
  },
  methods: {
    async handleCreateTicket() {
      const newTicket = await createTicket('This ticket was created from the front-end', 'Front-end ticket');
      console.log(newTicket);
    },
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

  .square#blue {
    top: 34%;
    right: -8%;
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

  .cta {
    margin-top: 10%;
  }
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
