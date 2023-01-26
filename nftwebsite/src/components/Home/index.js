import './index.scss';
import img from '../../assets/images/nft_1.png';  

const Home = () => {
    return (
      <>
       <div class="index">
            <h2>Lucky Rabbit Club</h2>
            <p>An Environment that is connecting Creative and like-minded people, communiti-driven project!</p>
            <a 
             href='/About'
             rel='noreferrer'>
             NEXT
            </a>
            <img src={img} alt="img"/>
       </div>
      </>
    );
}
export default Home;