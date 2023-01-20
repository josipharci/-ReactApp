import './index.scss';
import img from '../../assets/images/img1.png';      

const Home = () => {
    return (
      <div className="container_index">
        <h2>Lucky Rabbit Club</h2>
        <p>An Environment that is connecting <br/>Creative and like-minded people,<br/>communiti-driven project!</p>
        <div className="img_box"><img src={img} alt="img"/></div>
      </div>
    );
}
export default Home;