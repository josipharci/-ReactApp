import './index.scss';
import img from '../../assets/images/img1.png';      

const Home = () => {
    return (
      <div className="container_index">
        <h2 className="flipY">Lucky Rabbit Club</h2>
         <p id="one">An Environment that is connecting. </p>
         <p id="two">Creative and like-minded people,</p>
         <p id="three">communiti-driven project!</p>  
        <div className="img_box"><img  src={img} alt="img"/></div>
      </div>
    );
}
export default Home;