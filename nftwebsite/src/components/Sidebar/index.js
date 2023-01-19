import './index.scss';
import { Link,NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome , faUser , faEnvelope} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => (
   <div className='sidebar'>
       <Link className='logo' to='/'>
            <img className='Logo-img'src={Logo} alt="LOGO"/>
        </Link>
        <div className='links_box'>
        <NavLink className='Home' exact='true' activeclassname='active' to='/'>
            <FontAwesomeIcon icon={faHome} color='#fff'/>Home
        </NavLink>
        <NavLink className='About' exact='true' activeclassname='active' to='/About'>
            <FontAwesomeIcon icon={faUser} color='#fff'/>About
        </NavLink>
        <NavLink className='Contact' exact='true' activeclassname='active' to='/Contact'>
            <FontAwesomeIcon icon={faEnvelope} color='#fff'/>Contact
        </NavLink>
        </div>
    </div>

)

export default Sidebar;