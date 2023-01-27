import './index.scss';
import Logo from '../../assets/images/logo.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome ,faUser,faComment,faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import {faDiscord, faTwitter} from '@fortawesome/free-brands-svg-icons';
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
            <li class="social_link"><a href="https://twitter.com/LRabbitClub?t=mwO0aXibbNBFDws16DL38Q&s=09"><FontAwesomeIcon icon={faTwitter} color='#fff'/></a></li>    
            <li class="social_link"><a href="https://discord.gg/JGzqbhGsmM"><FontAwesomeIcon icon={faDiscord} color='#fff'/></a></li>       
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