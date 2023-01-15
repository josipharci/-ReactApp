import {Link,NavLink} from 'react-router-dom';
import './Navbar.scss';
import logo from './Img/logo.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook,faLinkedin} from '@fortawesome/free-brands-svg-icons';

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
                   <NavLink>
                      <FontAwesomeIcon icon={faFacebook} color='#fff'/>
                   </NavLink>
                   <NavLink>
                      <FontAwesomeIcon icon={faLinkedin} color='#fff'/>
                   </NavLink>
               </div>
            </div>
        </div>
    )
}

export default Navbar;