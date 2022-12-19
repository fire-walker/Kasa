import { Link } from "react-router-dom";

export default function Card ({accommodation}) {
    return (
        <Link to={`accommodations/${accommodation.id}`}>
            <div className="card">
                <img src={accommodation.cover} alt={accommodation.altText} className="card__image" />
                <div className="card__title">{accommodation.title}</div>
            </div>
        </Link>
    )
}
