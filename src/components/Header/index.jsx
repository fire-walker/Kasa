import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

function Header() {
    return (
        <header className='header'>
            <img src={logo} alt="logo" className='header__logo'/>
            <nav>
                <Link to="/" className='header__menu'>Accueil</Link>
                <Link to="/aboutus" className='header__menu'>A propos</Link>
            </nav>
        </header>
    )
}

export default Header