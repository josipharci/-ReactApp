import './App.scss';
import Navbar from './Navbar.js';
import Border from './Img/img1.jpg'; 

function App() {
  return (
    <div class="header">
      <Navbar/>
      <div class="Container">
        <div class="Border">
            <img src={Border} alt="img"/>
        </div>
      </div>
    </div>
  );
}

export default App;
