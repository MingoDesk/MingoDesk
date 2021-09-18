import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

interface IReturn {
  fetching: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: any;
  response?: AxiosResponse['data'];
}

const get = async (baseUrl: string, params: AxiosRequestConfig): Promise<IReturn> => {
  const state: IReturn = {
    response: {},
    errors: null,
    fetching: true,
  };

  try {
    const res = await axios.get(baseUrl, { ...params });
    state.response = res.data;
  } catch (error) {
    state.errors = error;
  } finally {
    state.fetching = false;
  }

  return state;
};

const post = async (url: string, params: AxiosRequestConfig): Promise<IReturn> => {
  const state: IReturn = {
    response: {},
    errors: null,
    fetching: true,
  };

  try {
    const res = await axios.post(url, params.params, params.data);
    state.response = res.data;
  } catch (error) {
    state.errors = error;
  } finally {
    state.fetching = false;
  }

  return state;
};
const patch = async (url: string, params: AxiosRequestConfig): Promise<IReturn> => {
  const state: IReturn = { response: [], errors: null, fetching: true };

  try {
    const res = await axios.patch(url, params.params, params.data);
    state.response = res.data;
  } catch (error) {
    state.errors = error;
  } finally {
    state.fetching = false;
  }

  return state;
};

export { get, post, patch, IReturn };
