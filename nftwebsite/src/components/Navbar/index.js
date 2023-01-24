import './index.scss';
import Logo from '../../assets/images/logo.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome , faUser , faComment} from '@fortawesome/free-solid-svg-icons';
import {faFacebook,faLinkedin} from '@fortawesome/free-brands-svg-icons';
const Navbar = () => {
   return (
     <>
     <nav>
        <a href="/">
          <img class="logo" src={Logo} alt="Logo_img"/>
        </a>
        <div>
          <ul id="navbar">
            <li><a href="/"><FontAwesomeIcon class="icon" icon={faHome} color='#fff'/>Home</a></li>
            <li><a href="/"><FontAwesomeIcon class="icon" icon={faUser} color='#fff'/>About</a></li>
            <li><a href="/"><FontAwesomeIcon class="icon" icon={faComment} color='#fff'/>Contact</a></li>   
            <li class="social_link"><a href="/"><FontAwesomeIcon icon={faFacebook} color='#fff'/></a></li>    
            <li class="social_link"><a href="/"><FontAwesomeIcon icon={faLinkedin} color='#fff'/></a></li>       
          </ul>
        </div>
     </nav>
     </>
   );
}

export default Navbar;