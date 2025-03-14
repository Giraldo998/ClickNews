import { NoticeCard } from '../newsCards';
import './assets/css/news_grid.css';

export const NewsGrid = ({topic, id}) => {

	
	return (
		<div className={`news_container grid grid_${id}`}>
			{topic && topic.map((article, i) => (
				<NoticeCard 
					key={article.contentLength} 
					index={i}
					{...article}  
				/>
			))}
		</div>
	);
};
