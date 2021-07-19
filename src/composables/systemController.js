import { toRefs, reactive } from 'vue';
import { get } from './axiosController';

function getAppSettings() {
  let settings = reactive({ data: [], error: null, fetching: false });

  const submitted = async () => {
    const { response, error, getData, fetching } = get(
      'http://localhost:1928/api/system/',
      {},
      { withCredentials: true }
    );
    await getData();
    settings.data = response;
    settings.error = error;
    settings.fetching = fetching;
  };

  return { submitted, ...toRefs(settings) };
}

export { getAppSettings };
