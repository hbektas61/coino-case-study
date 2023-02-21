import { baseApi } from '../index.api';
import { IProduct, IGetProductsProps, IGetProductsResponse } from './product.types';

const productApi = baseApi
  // .enhanceEndpoints({
  //     addTagTypes: ['Product'],
  // })
  .injectEndpoints({
    endpoints: build => ({
      getProducts: build.query<IGetProductsResponse, IGetProductsProps>({
        query: ({ limit, skip }) => `/products?limit=${limit}&skip=${skip}`,
      }),
      getProduct: build.query<IProduct, { id: string }>({
        query: ({ id }) => `/products/${id}`,
      }),
      searchProducts: build.query<IGetProductsResponse, { query: string }>({
        query: ({ query }) => `/products/search?q=${query}`,
      }),
    }),
  });

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useSearchProductsQuery,
  useLazySearchProductsQuery,
} = productApi;
