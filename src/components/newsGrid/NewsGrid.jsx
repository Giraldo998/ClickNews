import { NoticeCard } from '../newsCards';
import './assets/css/newsGrid.css';

export const NewsGrid = ({topic, id}) => {

	
	return (
		<div className={`news_container grid_${id}`}>
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
