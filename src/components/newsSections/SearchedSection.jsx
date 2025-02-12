import {useEffect} from 'react';
import { useSearchArticleQuery} from '../../store/API/NewsApi';
import { NewsGrid } from '../newsGrid';

export const SearchedSection = ({keyWord, id}) => {
	const {data, isLoading, error} = useSearchArticleQuery({query: keyWord,	language: 'es'});
		
	useEffect(() => {
		if (error) console.error('Error:', error);
      
	}, [error, data]);

	if (isLoading) console.log('Loading...');

	if (data) {
	   return (
	      <>
	         <NewsGrid topic={data} id={id} />
	      </>
	   );
	}
	return null;
};
