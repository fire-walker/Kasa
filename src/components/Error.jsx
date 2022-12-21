import { Link } from "react-router-dom"

import Header from "./Header";

export default function Error() {
    return (
        <div>
        <Header />
        <div className="error__container">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
    </div>
    )
}