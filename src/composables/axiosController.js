import axios from 'axios';
import { toRefs, reactive } from 'vue';

function post(url, data, options) {
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

function patch(url, data, options) {
  const state = reactive({
    response: [],
    errors: null,
    fetching: true,
  });

  const postData = async () => {
    try {
      const res = await axios.patch(url, data, options);
      state.response = res.data;
    } catch (errors) {
      state.errors = errors;
    } finally {
      state.fetching = false;
    }
  };

  return { ...toRefs(state), postData };
}

function get(baseUrl, params, options) {
  const state = reactive({ response: [], errors: null, fetching: true });

  const getData = async () => {
    try {
      const res = await axios.get(baseUrl, {
        params,
        options,
      });
      state.response = res.data;
    } catch (error) {
      state.errors = error;
    } finally {
      state.fetching = false;
    }
  };

  return { ...toRefs(state), getData };
}

export { patch, post, get };
