import './index.scss';
import img from '../../assets/images/nft_1.png';  
//import img2 from '../../assets/images/nft_2.png';  

const Home = () => {
    return (
      <>
         <div className="container header">
            <div className="centered">
               <h1>Lucky Rabbit Club</h1>
               <p>An Environment that is connecting<br/>Creative and like-minded people,<br/>communiti-driven project!</p>
               <img className="nft_1" src={img} alt="nft1" />
            </div>
         </div> 
      </>
    );
}
export default Home;