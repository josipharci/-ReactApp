import './index.scss';
import img from '../../assets/images/nft_1.png';  

const Home = () => {
    return (
      <>
       <div class="index">
            <h2 className="header">Lucky Rabbit Club</h2>
            <p className="text">An Environment that is connecting Creative and like-minded people, communiti-driven project!</p>
            <a 
             className="link"
             href='/About'
             rel='noreferrer'>
             NEXT
            </a>
            <img className="img_1" src={img} alt="img"/>
       </div>
      </>
    );
}
export default Home;