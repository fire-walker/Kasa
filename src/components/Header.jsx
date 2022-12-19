import {Link, NavLink} from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Header() {
    return (
        <header className='header'>
            <Link to="/"><img src={logo} alt="logo" className='header__logo'/></Link>
            <nav>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Accueil</NavLink>
                <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>A propos</NavLink>
            </nav>
        </header>
    )
}