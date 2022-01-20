<template>
  <main class="your-tickets-container">
    <div class="are-you-sure-container" v-if="attemptClose">
      <div class="are-you-sure-inner-container">
        <AreYouSureWidget
          ctaActionMsg="Discard"
          ctaReturnMsg="Cancel"
          descriptionMsg="If you discard the ticket you'll loose all that you've typed."
          actionMsg="Are you sure you want to discard the ticket?"
          @return="handleCancelClick"
          @action="handleDiscardClick"
        />
      </div>
    </div>
    <Header :subheading="subheading" routeName="Your tickets" />
    <div class="your-tickets">
      <PerfectScrollbar :options="scrollbarOptions" data-simplebar-auto-hide="false" class="metadata-tickets-container">
        <ul v-if="metadata && metadata.data && metadata.data.length" class="metadata-tickets">
          <li v-for="data in metadata.data" :key="data._id" @click="handleSelectTicket(data._id)">
            <MetaDataTicket :metadata="data" :isDraft="data.isDraft" />
          </li>
        </ul>
      </PerfectScrollbar>
      <div
        v-if="!creatingTicket && metadata && metadata.data && metadata.data.length"
        class="no-selected-ticket-container"
      >
        <div class="card-container">
          <div class="card">
            <h1>Select a ticket to read</h1>
            <p>Select a ticket to read and reply!</p>
          </div>
          <Cta msg="Create a ticket" color="#4346d4" @click="handleStartCreateTicket" />
        </div>
      </div>
      <section v-if="creatingTicket" class="create-ticket-modal">
        <CreateTicketModal @attemptClose="handleAttemptClose" @successfulSubmit="handleSuccessfulSubmit" />
      </section>
      <section v-if="(!metadata || !metadata.data) && !creatingTicket" class="no-tickets-container">
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
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref, Ref } from 'vue';
import MetaDataTicket from '../components/tickets/MetaDataTicket.vue';
import CreateTicketModal from '../components/tickets/CreateTicketModal.vue';
import { ITicket, ITicketMetaData } from '../@types/ticket';
import { IReturn } from '../helpers/api/requestGenerator';
import { user } from '../helpers/store/userStore';
import Cta from '../components/buttons/Cta.vue';
import Header from '../components/Header.vue';
import AreYouSureWidget from '../components/modals/AreYouSureWidget.vue';
import { getPersonalTickets } from '../helpers/api/tickets/ticketController';

const tries: Ref<number> = ref(0);
const authoredTickets: Ref<IReturn['response'] | null> = ref(null);
const subheading: Ref<string> = ref(`Currently you have 0 tickets`);
const creatingTicket: Ref<boolean> = ref(false);
const selectedTicket: Ref<ITicket | null> = ref(null);
const attemptClose: Ref<boolean> = ref(false);

const getData = async () => {
  if (tries.value > 3) return;
  const { response, errors } = await getPersonalTickets();
  if (errors && errors.response.status === 403) return tries.value++;

  authoredTickets.value = { ...response };
};

export default defineComponent({
  name: 'YourTickets',
  components: {
    MetaDataTicket,
    Cta,
    Header,
    CreateTicketModal,
    AreYouSureWidget,
  },
  props: {
    unnassignedTickets: { type: Array as PropType<Array<ITicketMetaData>> },
  },
  setup() {
    onMounted(async () => {
      await getData();
      if (authoredTickets.value && authoredTickets.value.data && authoredTickets.value.data.length) {
        const ticketOrTickets = authoredTickets.value.data.length < 2 ? 'ticket' : 'tickets';
        subheading.value = `Currently you have ${authoredTickets.value.data.length} ${ticketOrTickets}`;
      }
    });

    const scrollbarOptions = {
      maxScrollbarLength: 40,
      wheelSpeed: 0.2,
      swipeEasing: true,
    };

    return {
      metadata: authoredTickets,
      subheading,
      creatingTicket,
      scrollbarOptions,
      attemptClose,
    };
  },
  methods: {
    async handleStartCreateTicket() {
      const now = new Date();
      const drafTicket = {
        _id: 'DRAFT',
        isDraft: true,
        authorId: user.value!.response.user.providerId,
        author: user.value!.response.user.name,
        subject: {
          type: 'doc',
          content: [
            {
              type: 'heading',
              attrs: {
                level: 3,
              },
              content: [
                {
                  type: 'text',
                  text: 'DRAFT: Your title here...',
                },
              ],
            },
          ],
        },
        authorOrganisationId: null,
        status: 2,
        createdAt: now,
        isStarred: false,
        tags: [],
        labels: [],
        isUpdated: false,
        previewText: 'Some of your content will be here...',
      };
      authoredTickets.value.data.splice(0, 0, drafTicket);
      creatingTicket.value = true;
    },
    handleSelectTicket(ticketId: string) {
      selectedTicket.value = authoredTickets.value.data.find((el: ITicketMetaData) => el._id === ticketId);
    },
    handleAttemptClose() {
      attemptClose.value = true;
    },
    handleDiscardClick() {
      authoredTickets.value.data.shift();
      creatingTicket.value = false;
      attemptClose.value = false;
    },
    handleCancelClick() {
      attemptClose.value = false;
    },
    handleSuccessfulSubmit() {
      window.location.reload();
    },
  },
});
</script>

<style lang="scss">
@use '../scss/colors' as c;

.your-tickets-container {
  overflow-x: hidden;
}

.are-you-sure-container {
  position: fixed;
  top: 0%;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  height: 100vh;
  overflow-x: hidden;
  background: rgba(0, 0, 0, 0.835);
  overflow: hidden;
  z-index: 200;
  display: flex;
  justify-content: center;
  align-items: center;
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

.create-ticket-modal {
  width: inherit;
  min-width: 30rem;
  max-width: 60%;
  margin-top: 0.5%;
  max-height: 50vh;
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

.your-tickets {
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
