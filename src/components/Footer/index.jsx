import logo_white from '../../assets/logo_white.png'

export default function Footer () {
    return (
        <footer className='footer'>
            <img src={logo_white} alt="logo" className='footer__logo'/>
            <p className='footer__copyright'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}