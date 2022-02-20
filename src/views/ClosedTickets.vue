<template>
  <main class="closed-tickets-container">
    <Header :subheading="subheading" routeName="Closed tickets" />
    <div class="closed-tickets">
      <PerfectScrollbar :options="scrollbarOptions" data-simplebar-auto-hide="false" class="metadata-tickets-container">
        <ul v-if="metadata && metadata.length" class="metadata-tickets">
          <li v-for="data in metadata" :key="data._id" @click="handleSelectTicket(data._id)">
            <MetaDataTicket :metadata="data" :isDraft="data.isDraft" />
          </li>
        </ul>
      </PerfectScrollbar>
      <section v-if="metadata && metadata.data" class="no-tickets-container">
        <div class="inner-container">
          <div class="card-container">
            <div class="card">
              <h1>You don't have any<br />closed tickets!</h1>
              <p>
                Hi {{ user.name.split(' ')[0] }}, you currenlty don't have any closed tickets, would you like to create
                a <a href="#">ticket?</a>
              </p>
            </div>
            <div class="square" aria-hidden="true"></div>
            <div class="square" id="blue" aria-hidden="true"></div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref, Ref } from 'vue';
import MetaDataTicket from '../components/tickets/MetaDataTicket.vue';
import { ITicketMetaData, TicketStatus } from '../@types/ticket';
import { userStore } from '../helpers/stores/userStore';
import Header from '../components/Header.vue';
import { getPersonalTickets } from '../helpers/api/tickets/ticketController';
import { storeToRefs } from 'pinia';
import { ticketStore } from '../helpers/stores/ticketStore';
import { scrollbarOptions } from '../config/scrollbarOptions';
import { getTicketOrTickets } from '../helpers/functions/ticketOrTickets';

export default defineComponent({
  name: 'ClosedTickets',
  components: {
    MetaDataTicket,
    Header,
  },
  props: {
    unnassignedTickets: { type: Array as PropType<Array<ITicketMetaData>> },
  },
  setup() {
    const tries: Ref<number> = ref(0);
    const subheading: Ref<string> = ref('You have 0 closed tickets');
    const creatingTicket: Ref<boolean> = ref(false);
    const selectedTicket: Ref<ITicketMetaData | undefined> = ref(undefined);
    const attemptClose: Ref<boolean> = ref(false);
    const userStateStore = userStore();
    const ticketState = ticketStore();
    const ticketRef = storeToRefs(ticketState);

    const getData = async () => {
      if (tries.value > 3) return;
      const { response, errors } = await getPersonalTickets(TicketStatus.closed, userStateStore.user.providerId);
      if (errors && errors.response.status === 403) return tries.value++;

      ticketState.setMetadata(response.data);
    };

    onMounted(async () => {
      await getData();
      if (ticketRef.metadata.value && ticketRef.metadata.value.length) {
        subheading.value = getTicketOrTickets(ticketRef.metadata.value);
      }
    });

    return {
      metadata: ticketRef.metadata,
      subheading,
      creatingTicket,
      scrollbarOptions,
      attemptClose,
      user: storeToRefs(userStateStore).user,
      selectedTicket,
      handleSelectTicket(ticketId: string) {
        const ticket: ITicketMetaData | undefined = ticketState.metadata.find(
          (el: ITicketMetaData) => el._id === ticketId
        );
        selectedTicket.value = ticket;
      },
    };
  },
});
</script>

<style lang="scss">
@use '../scss/colors' as c;

.closed-tickets-container {
  overflow-x: hidden;
}

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

h1 {
  color: c.$text;
  margin-bottom: 0em;
}

.buttons {
  display: flex;
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

.card {
  background-color: c.$bg-purple;
  padding: 0.2rem 4rem;
  border-radius: 8px;
  text-align: center;
  display: flex;

  p {
    margin-top: 5%;
  }

  a {
    color: c.$text-link;
  }
}

.closed-tickets {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 90%;
  padding-right: 10%;
}

.ps {
  overflow-y: auto;
  overflow-x: hidden;
  height: 84vh;
  width: 32rem;
  z-index: 100;

  .metadata-tickets li:not(:first-child) {
    margin-top: 0.5%;
  }
}

.no-selected-ticket-container {
  .card {
    display: flex;
    align-self: center;
    justify-content: center;
    flex-direction: column;
    min-width: 20rem;
    height: 14rem;

    h1 {
      margin: 0;
    }
  }

  .cta {
    width: 28rem;
  }
}

.metadata-tickets {
  max-width: 40rem;
  min-width: 30rem;
}
</style>
