import React ,{useState} from "react";
import imageData from "../imgData";
import Popup from "./popup";
import ContactForm from "./ContactForm";

console.log(imageData)
function Header(props){

  const  [buttonPopup, setButtonPopup] = useState(false);
    return(
   <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary color-weight">
  <div className="container">
  
   <a className="navbar-brand" href="#">
        <img src={imageData.logo.src} className="logo-size" alt="" />
        </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarNav" aria-controls="navbarNav"
     aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>


   <div className="collapse navbar-collapse slight-align" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Price & Plan</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">Feedback</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">Services</a>
        </li>
      </ul>
   
    </div>


    <div className="button-hide">
    <a type="button" onClick={() => setButtonPopup(true)}  className="btn  " style={{background: "#23A5C3", color: "#fff"}}>Book Your Trial</a>
    </div>
    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                  <ContactForm />
                </Popup>
  </div>
</nav>
   </div>
    )
}

export default Header;



