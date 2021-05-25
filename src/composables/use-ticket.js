import { toRefs, reactive, ref } from 'vue';
import { post, patch } from './use-axios';

function createTicket() {
  let ticket = reactive({ data: [], error: null, fetching: false });
  // let errors = reactive({error: null});
  const submitted = async () => {
    const { response, error, postData, fetching } = post(
      'http://localhost:1928/api/tickets/new',
      {
        text: 'This ticket was created from the front-end',
      },
      { withCredentials: true }
    );
    postData();
    ticket.data = response;
    ticket.error = error;
    ticket.fetching = fetching;
  };

  return { submitted, ...toRefs(ticket) };
}

function replyTicket() {
  let ticket = reactive({ data: [], error: null, fetching: false });
  const val = ref('');
  // let errors = reactive({error: null});
  const submitted = async () => {
    console.log(val.value);
    const { response, error, postData, fetching } = patch(
      'http://localhost:1928/api/tickets/reply',
      {
        ticketId: val.value,
        text: 'This reply was sent from the front-end',
      },
      { withCredentials: true }
    );
    postData();
    ticket.data = response;
    ticket.error = error;
    ticket.fetching = fetching;
  };
  return { submitted, ...toRefs(ticket), val };
}

function addNoteToTicket() {
  let ticket = reactive({ data: [], error: null, fetching: false });
  const val = ref('');
  // let errors = reactive({error: null});
  const submitted = async () => {
    console.log(val.value);
    const { response, error, postData, fetching } = patch(
      'http://localhost:1928/api/tickets/notes/new',
      {
        ticketId: val.value,
        text: 'This is a note',
      },
      { withCredentials: true }
    );
    postData();
    ticket.data = response;
    ticket.error = error;
    ticket.fetching = fetching;
  };
  return { submitted, ...toRefs(ticket), val };
}

export { createTicket, replyTicket, addNoteToTicket };
