
import './App.css'
import NavBar from './Components/NavBar'
import profile1 from './profile1.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';


function App() {
  

  return (
    <>
  <NavBar/>
  <div className="details">
   <img src={profile1}></img>
   <h2>FrontEnd Engineer</h2>
  
  <p>As a FrontEnd Engineer ,<br></br>
  Our role is to build industry level
  projects<br></br>
  to upgrade our skills and customize the
  Applications</p>
  </div>
  <div className="buttons">
  <button class="btn">Hire Me</button>
  <button class="btn">SeeProjects</button>
   <div className="icons">
    <p>
      <FontAwesomeIcon icon={faLinkedin} style={{fontSize:"30px",color:"blue"}}/>
        <FontAwesomeIcon icon={faWhatsapp} style={{fontSize:"30px",color:"green"}}/>
          <FontAwesomeIcon icon={faInstagram} style={{fontSize:"30px",color:"deepPink"}}/>
    </p>
  </div>
  </div>
 


    </>
  )
}

export default App
