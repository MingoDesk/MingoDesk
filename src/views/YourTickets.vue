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
        <ul v-if="metadata && metadata.length" class="metadata-tickets">
          <li v-for="data in metadata" :key="data._id" @click="handleSelectTicket(data._id)">
            <MetaDataTicket :metadata="data" :isDraft="data.isDraft" />
          </li>
        </ul>
      </PerfectScrollbar>
      <div v-if="!creatingTicket && !selectedTicket && !!metadata" class="no-selected-ticket-container">
        <div class="card-container">
          <div class="card">
            <h1>Select a ticket to read</h1>
            <p>Select a ticket to read and reply!</p>
          </div>
          <Cta msg="Create a ticket" color="#4346d4" @click="handleStartCreateTicket" />
        </div>
      </div>
      <section v-if="selectedTicket" class="selected-ticket-container">
        <TicketView :ticketId="selectedTicket._id" :author="selectedTicket.author" :subject="selectedTicket.subject" />
      </section>
      <section v-if="creatingTicket && !selectedTicket" class="create-ticket-modal">
        <CreateTicketModal @attemptClose="handleAttemptClose" @successfulSubmit="handleSuccessfulSubmit" />
      </section>
      <section v-if="!metadata && !creatingTicket" class="no-tickets-container">
        <div class="inner-container">
          <div class="card-container">
            <div class="card">
              <h1>You haven't created any<br />tickets yet</h1>
              <p>
                Hi Samantha, welcome to MingoDesk! To create a ticket, click the big blue button below or visit the
                <a href="#">FAQ?</a> if you need any assistance
              </p>
            </div>
            <Cta msg="Create a ticket" color="#4346d4" @click="handleStartCreateTicket" />
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
import { ITicketMetaData, TicketStatus } from '../@types/ticket';
import { userStore } from '../helpers/stores/userStore';
import Cta from '../components/buttons/Cta.vue';
import Header from '../components/Header.vue';
import AreYouSureWidget from '../components/modals/AreYouSureWidget.vue';
import { getPersonalTickets } from '../helpers/api/tickets/ticketController';
import TicketView from '../components/tickets/TicketView.vue';
import { ticketStore } from '../helpers/stores/ticketStore';
import { storeToRefs } from 'pinia';
import { scrollbarOptions } from '../config/scrollbarOptions';
import { getTicketOrTickets } from '../helpers/functions/ticketOrTickets';

export default defineComponent({
  name: 'YourTickets',
  components: {
    MetaDataTicket,
    Cta,
    Header,
    CreateTicketModal,
    AreYouSureWidget,
    TicketView,
  },
  props: {
    unnassignedTickets: { type: Array as PropType<Array<ITicketMetaData>> },
  },
  setup() {
    const subheading: Ref<string> = ref(`You have 0 open tickets`);
    const creatingTicket: Ref<boolean> = ref<boolean>(false);
    const selectedTicket = ref<ITicketMetaData | undefined>(undefined);
    const attemptClose = ref<boolean>(false);
    const userStateStore = userStore();
    const tries = ref<number>(0);
    const ticketState = ticketStore();
    const ticketRef = storeToRefs(ticketState);

    const getData = async () => {
      if (tries.value > 3) return;
      const { response, errors } = await getPersonalTickets(TicketStatus.open, userStateStore.user.providerId);
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
      selectedTicket,
      async handleStartCreateTicket() {
        const now = new Date();
        const drafTicket = {
          _id: 'DRAFT',
          isDraft: true,
          authorId: userStateStore.user.providerId,
          author: userStateStore.user.name,
          updated: true,
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
          createdAt: now.toString(),
          isStarred: false,
          tags: [],
          labels: [],
          isUpdated: false,
          previewText: 'Some of your content will be here...',
        };

        if (ticketRef.metadata.value) {
          ticketRef.metadata.value.splice(0, 0, drafTicket);
        } else {
          ticketRef.metadata.value = [drafTicket];
        }

        creatingTicket.value = true;
      },
      handleSelectTicket(ticketId: string) {
        const ticket: ITicketMetaData | undefined = ticketState.metadata.find(
          (el: ITicketMetaData) => el._id === ticketId
        );
        selectedTicket.value = ticket;
      },
      handleAttemptClose() {
        attemptClose.value = true;
      },
      handleDiscardClick() {
        ticketRef.metadata.value.shift();
        creatingTicket.value = false;
        attemptClose.value = false;
      },
      handleCancelClick() {
        attemptClose.value = false;
      },
      handleSuccessfulSubmit() {
        window.location.reload();
      },
    };
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
    width: 100%;
  }
}

.card {
  background-color: c.$bg-purple;
  padding: 0.2rem 4rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 30vh;

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

  transition: none;
}

.ps__rail-y {
  -webkit-transition: none !important;
  transition: none !important;
  background: none !important;
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

.metadata-tickets li:not(:first-child) .ticket-metadata {
  margin-top: 2%;
}
</style>
