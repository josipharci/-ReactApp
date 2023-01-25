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
    this.setState({clicked:
    !this.state.clicked})
  }
   render(){
   return (
     <>
     <nav>
        <a href="/">
          <img class="logo" src={Logo} alt="Logo_img"/>
        </a>
        <div>
          <ul id="navbar" className={
            this.state.clicked ? "#navbar active"
          : "#navbar"}>
            <li><a href="/"><FontAwesomeIcon class="icon" icon={faHome} color='#fff' activeclassname='active'/>Home</a></li>
            <li><a href="/About"><FontAwesomeIcon class="icon" icon={faUser} color='#fff' activeclassname='active'/>About</a></li>
            <li><a href="/Contact"><FontAwesomeIcon class="icon" icon={faComment} color='#fff' activeclassname='active'/>Contact</a></li>   
            <li class="social_link"><a href="https://www.facebook.com/profile.php?id=100009919082627"><FontAwesomeIcon icon={faFacebook} color='#fff'/></a></li>    
            <li class="social_link"><a href="/"><FontAwesomeIcon icon={faLinkedin} color='#fff'/></a></li>       
          </ul>
        </div>
        <div id="mobile" onClick={this.handleClick}>
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