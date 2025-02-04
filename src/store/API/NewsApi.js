import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const NewsApi = createApi({
	reducerPath: 'NewsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://news-api14.p.rapidapi.com',
		prepareHeaders(headers) {
			headers.set(
				'x-rapidapi-key',
				'86b6bb6691mshb69fe7689a60d3fp17ec55jsn2e796f515387'
			);
			headers.set('x-rapidapi-host', 'news-api14.p.rapidapi.com');
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
