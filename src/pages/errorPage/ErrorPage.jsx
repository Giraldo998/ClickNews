import './css/error.css'

export const ErrorPage = ({typeError}) => {
	
	return (
		<div className="error-not-found">
			<div className="image-container">
				<img className='error-image' src='/public/img/error_image.svg' alt={`imagen de error ${typeError.staus}`} />
			</div>
			<h3 className='error-reference'>Error {typeError.status} {typeError.data.message}</h3>
		</div>
	)
}
