import { useEffect } from "react";
import { NewsGrid } from "../components";
import { useSearchArticleQuery } from "../store/API/NewsApi";

export const SearchedNews = ({keyWord}) => {
	
	const {data, error, isLoading} = useSearchArticleQuery({query: keyWord, language: 'es'});
	
	useEffect(() => {
		if (data) {
			console.log('Data:', data);
		}
		if (error) {
			console.error('Error:', error);
		}
		if (isLoading) {
			console.log('Loading...');
		}
	}, [data, error, isLoading]);

	return (
      <NewsGrid topic={data} id='1'/>
	)
}
