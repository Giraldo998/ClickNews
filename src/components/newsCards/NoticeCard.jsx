import './assets/css/noticecard.css';

export const NoticeCard = ({
	index,
	title,
	excerpt: description,
	thumbnail: image,
	url,
}) => {

	return (
		<article className={`card_container card_${index}`}>
			<a href={url} target='_blank' className="card_content">
				<header className='card_header'>
					<h3 className='card_title'>{title}</h3>
					<p className='card_description'>{description}</p>
				</header>
				<div className="image_container">
					<img src={image} alt="" className="card_image" />
				</div>
			</a>
		</article>
	);
};
