import {useEffect} from 'react';
import {useGetTrendingQuery} from '../../store/API/NewsApi';
import {NoticeCard} from '../newsCards/NoticeCard';
import './assets/css/newsGrid.css';

export const NewsGrid = ({topic, id}) => {
	
	const {data, isLoading, error} = useGetTrendingQuery({topic: topic, language: 'es'});

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
		<div className={`news_container grid_${id}`}>
			{data && data.slice(0, 6).map((article, i) => (
				<NoticeCard 
					key={article.contentLength} 
					index={i}
					{...article}  
				/>
			))}
		</div>
	);
};
