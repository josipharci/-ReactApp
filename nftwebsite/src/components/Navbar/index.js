import './index.scss';
import logo from '../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Navbar = () => {
  return (
    <>
       <nav className="navbar">
          <div className="col logo">
            <a href="/"><img src={logo} alt="#"/></a>
          </div>
          <ul className="col links">
            <li><a className="Twitter" href="https://twitter.com/LRabbitClub?t=mwO0aXibbNBFDws16DL38Q&s=09" target="_blank" rel="noreferrer"><FontAwesomeIcon className='icon_tw' icon={faTwitter} color='#fff'/></a></li>
            <li><a className="Discord"href="https://discord.gg/JGzqbhGsmM" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon_ds" icon={faDiscord} color='#fff'/></a></li>
          </ul>
        </nav>
    </>
  );
}

export default Navbar;