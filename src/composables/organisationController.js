import { toRefs, reactive } from 'vue';
import { post } from './axiosController';

function createOrganisation() {
  let organisation = reactive({ data: [], error: null, fetching: false });

  const submitted = async () => {
    const { response, error, postData, fetching } = post(
      'http://localhost:1928/api/organisation/new',
      {
        name: 'Titus Inc',
        users: ['github|16852656'],
      },
      { withCredentials: true }
    );
    await postData();
    organisation.data = response;
    organisation.error = error;
    organisation.fetching = fetching;
  };

  return { submitted, ...toRefs(organisation) };
}

export { createOrganisation };
