import { toRefs, reactive } from "vue";
import useAxios from "./use-axios";

export default function () {
  let ticket = reactive({ data: [], error: null, fetching: false });
  // let errors = reactive({error: null});
  const submitted = async () => {
    const { response, error, postData, fetching } = useAxios(
      "http://localhost:1928/api/tickets/new",
      {
        authorId: "github|16852656",
        text: "This ticket was created from the front-end",
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
