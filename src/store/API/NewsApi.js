import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { API_URL, API_KEY, API_HOST, KEY_NAME, HOST_NAME } from '../../assets';

export const newsApi = createApi({
	reducerPath: 'NewsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${API_URL}`,
		prepareHeaders(headers) {
			headers.set(`${KEY_NAME}`, `${API_KEY}`);
			headers.set(`${HOST_NAME}`, `${API_HOST}`);
			return headers;
		},
	}),

	keepUnusedDataFor: 600,
	endpoints: (builder) => ({
		searchArticle: builder.query({
			query: ({query, language}) => ({
				url: '/v2/search/articles',
				params: {query, language},
			}),
			transformResponse: (response) => {
				const { data } = response;
				return data;
			},
		}),
		
		getTrending: builder.query({
			query: ({topic, language}) => ({
				url: '/v2/trendings',
				params: {topic, language},
			}),
			extraOptions: { maxRetries: 2 },
			transformResponse: (response) => {
				const { data } = response;
				return data;
			},
		}),
	}),

});

export const {useSearchArticleQuery, useGetTrendingQuery} = newsApi;
