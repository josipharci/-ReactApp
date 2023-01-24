import './index.scss';
import Logo from '../../assets/images/logo.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome ,faUser,faComment,faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import {faFacebook,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { Component } from 'react';

class Navbar extends 
 Component {
  state={ clicked: false };
  handleClick = () =>{
    
  }
   render(){
   return (
     <>
     <nav>
        <a href="/">
          <img class="logo" src={Logo} alt="Logo_img"/>
        </a>
        <div>
          <ul id="navbar">
            <li><a href="/"><FontAwesomeIcon class="icon" icon={faHome} color='#fff' activeclassname='active'/>Home</a></li>
            <li><a href="/About"><FontAwesomeIcon class="icon" icon={faUser} color='#fff' activeclassname='active'/>About</a></li>
            <li><a href="/Contact"><FontAwesomeIcon class="icon" icon={faComment} color='#fff' activeclassname='active'/>Contact</a></li>   
            <li class="social_link"><a href="/"><FontAwesomeIcon icon={faFacebook} color='#fff'/></a></li>    
            <li class="social_link"><a href="/"><FontAwesomeIcon icon={faLinkedin} color='#fff'/></a></li>       
          </ul>
        </div>
        <div id="mobile">
          <FontAwesomeIcon id="icon_mobile" icon={
            this.state.clicked ? 
            faTimes : 
            faBars
          }/>
          
        </div>
     </nav>
     </>
   );
 }
}

export default Navbar;