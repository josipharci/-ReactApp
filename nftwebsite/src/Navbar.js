import './Navbar.scss';
import logo from './Img/logo.png'

const Navbar = () => {
    return(
        <div className='navbar'>
            <div className='logo_box'>
                <img src={logo} alt="Logo"/>
            </div>
        </div>
    )
}

export default Navbar;