import axios from "axios";
import { toRefs, reactive } from "vue";

export default function (url, data, options) {
  const state = reactive({
    response: [],
    errors: null,
    fetching: true,
  });

  const postData = async () => {
    try {
      const res = await axios.post(url, data, options);
      state.response = res.data;
    } catch (errors) {
      state.errors = errors;
    } finally {
      state.fetching = false;
    }
  };

  return { ...toRefs(state), postData };
}
