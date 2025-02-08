import {useEffect} from 'react';
import {NewsGrid} from '../components';
import {useSearchArticleQuery} from '../store/API/NewsApi';

export const SearchedNews = ({keyWord}) => {
	
	const {data, error, isLoading} = useSearchArticleQuery({query: keyWord, language: 'es'});

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
