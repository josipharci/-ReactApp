import './index.scss';
import img from '../../assets/images/nft_1.png';  
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';


const Home = () => {
    return (
      <>
       <div class="index">
            <h2>Lucky Rabbit Club</h2>
            <p>An Environment that is connecting Creative and like-minded people, communiti-driven project!</p>
            <a 
             href='/About'
             target="_blank"
             rel='noreferrer'>
             <FontAwesomeIcon class="icon" icon={faArrowRight} color='#fff'></FontAwesomeIcon>NEXT
            </a>
            <img src={img} alt="img"/>
       </div>
      </>
    );
}
export default Home;