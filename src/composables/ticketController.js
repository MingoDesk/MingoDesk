import { toRefs, reactive, ref } from 'vue';
import { post, patch } from './axiosController';

function createTicket() {
  let ticket = reactive({ data: [], error: null, fetching: false });

  const submitted = async () => {
    const { response, error, postData, fetching } = post(
      'http://localhost:1928/api/tickets/new',
      {
        text: 'This ticket was created from the front-end',
      },
      { withCredentials: true }
    );
    await postData();
    ticket.data = response;
    ticket.error = error;
    ticket.fetching = fetching;
  };

  return { submitted, ...toRefs(ticket) };
}

function replyTicket() {
  let ticket = reactive({ data: [], error: null, fetching: false });
  const val = ref('');

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

function editNote() {
  let ticket = reactive({ data: [], error: null, fetching: false });
  const ticketId = ref('');
  const noteId = ref('');

  const submitted = async () => {
    const { response, error, postData, fetching } = patch(
      'http://localhost:1928/api/tickets/notes/edit',
      {
        ticketId: ticketId.value,
        noteId: noteId.value,
        text: 'This note was edited',
      },
      { withCredentials: true }
    );
    postData();
    ticket.data = response;
    ticket.error = error;
    ticket.fetching = fetching;
  };
  return { submitted, ...toRefs(ticket), ticketId, noteId };
}

export { createTicket, replyTicket, addNoteToTicket, editNote };
