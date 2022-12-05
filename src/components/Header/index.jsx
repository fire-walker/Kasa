import {Link, NavLink} from 'react-router-dom';
import logo from '../../assets/logo.png';

function Header() {
    return (
        <header className='header'>
            <Link to="/"><img src={logo} alt="logo" className='header__logo'/></Link>
            <nav>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Accueil</NavLink>
                <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>A propos</NavLink>
            </nav>
        </header>
    )
}

export default Header