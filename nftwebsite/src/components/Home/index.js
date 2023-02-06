import './index.scss';
import img from '../../assets/images/nft_1.png';  
import img2 from '../../assets/images/nft_2.png';  

const Home = () => {
    return (
      <>
        <div className="container">
           <div className="col">
              <h2 className="header">Lucky Rabbit Club</h2>
              <p className="text">An Environment that is connecting<br/>Creative and like-minded people,<br/>communiti-driven project!</p>
           </div>
           <div className="col">
              <img src={img} alt="img" />
           </div>
        </div>
      </>
    );
}
export default Home;