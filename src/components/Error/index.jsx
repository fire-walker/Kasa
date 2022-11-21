import { useRouteError, Link } from "react-router-dom"
import Header from "../Header";

export default function Error() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="error">
            <Header />
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d'accueil</Link>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}