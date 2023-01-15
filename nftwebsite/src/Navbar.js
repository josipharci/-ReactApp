import {Link} from 'react-router-dom';
import './Navbar.scss';
import logo from './Img/logo.png';

const Navbar = () => {
    return(
        <div class="navbar">
            <div class='logo_box'>
            <Link to="/"><img src={logo} alt="Logo"/></Link>
            </div>
            <div class='nav_box'>
            <Link to="/">HOME</Link> 
            <Link to="/">ABOUT</Link> 
            <Link to="/">CONTACT</Link> 
               <div class="SocialLink">
                
               </div>
            </div>
        </div>
    )
}

export default Navbar;