import './App.scss';
import Navbar from './Navbar.js';
import Border from './Img/img1.png'; 

function App() {
  return (
    <div class="header">
      <Navbar/>
      <div class="Container">
        <div class="Border">
            <img src={Border} alt="img"/>
            <div class="Text">
                <h2>Lucky Rabbit Club</h2>
                <p>An Environment that is connecting Creative and like-minded people, communiti-driven project!</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
