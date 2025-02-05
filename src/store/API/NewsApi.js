import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { API_URL, API_KEY, API_HOST } from '../../assets';

export const NewsApi = createApi({
	reducerPath: 'NewsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${API_URL}`,
		prepareHeaders(headers) {
			headers.set('x-rapidapi-key', `${API_KEY}`);
			headers.set('x-rapidapi-host', `${API_HOST}`);
			return headers;
		},
	}),

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
			transformResponse: (response) => {
				const { data } = response;
				return data;
			},
		}),
	}),

});

export const {useSearchArticleQuery, useGetTrendingQuery} = NewsApi;
