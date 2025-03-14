import './assets/css/notice_card.css';

export const NoticeCard = ({
	index,
	title,
	excerpt: description,
	thumbnail: image,
	url,
	authors,
}) => {

	return (
		<article className={`card_container card_${index} card`}>
			<a href={url} target='_blank' className="card_content">
				<header className='card_header'>
					<div className="image_container">
						<img src={image} alt="" className="card_image" />
					</div>
					<h3 className='card_title'>{title}</h3>
				</header>
				<div className="description_container">
					<p className='card_description'>{description}</p>
					<p className='author'>{authors!=0 ? <> Por: <span>{authors}</span> </> : null}</p>
					</div>
			</a>
		</article>
	);
};
