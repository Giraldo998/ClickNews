import {useEffect} from 'react';
import {useGetTrendingQuery} from '../store/API/NewsApi';
import {NewsGrid} from '../components';

export const DefaultNews = () => {
   
	const {data, isLoading, error} = useGetTrendingQuery({topic: 'economy', language: 'es'});

	useEffect(() => {
		if (error) console.error('Error:', error);
	}, [error]);

   if (isLoading) console.log('Loading...');

   if (data) {
      return (
         <>
            <NewsGrid topic={data} id="1" />
         </>
      );
   }
   return null;
};
