import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '../integrations/axios/helpers/axiosBaseQuery';

const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery(),
  endpoints: () => ({}), // Empty endpoints, will be injected later
});

export default baseApi;
