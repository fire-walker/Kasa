export default function Card ({title ,picture, altText=""}) {
    return (
        <div className="card">
            <img src={picture} alt={altText} className="card__image" />
            <div className="card__title">{title}</div>
        </div>
    )
}
