import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery";
import "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Carousel from "./components/Carousel";
import Agency from "./components/Agency.js";
import Price from "./components/Price.js";
import Services from "./components/Services.js";
import imageData from "./imgData.jsx";
import Feedback from "./components/FeedBack.jsx";
import Certified from "./components/Certified.js";
// import CheckIcon from "@mui/icons-material/Check";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Certified />
      <Agency />
      <div className="container">
        <div className="row">
        <h5 className="agency-heading pt-3" style={{color: "#39438c"}}>Price & Plans.</h5>
          <div className="col-md-4">
            <Price
              title1="(12 Sessions, 1 Month)"
              title2="₹ 16,520"
              title3="Basic Training"
              l1="Essential Social Etiquette."
              l2="Effective Leash Training"
              l3="Mastering Pee/Potty Training."
              l4="Polite Greetings"
              l5="Intelligent Feedback."
              l6="Perfecting the Art of Walking Clear and Concise Instructions."
              ss={"margins"}
            />
          </div>
          <div className="col-md-4">
            <Price
              title1="(24 Sessions, 2 Month)"
              title2="₹ 30,000"
              title3="Advanced Training"
              l1="Refined Social Etiquette (Sit, Stay, Walk, etc.)"
              l2="Masterful Leash Skills."
              l3="Advanced Pee/Potty Mastery."
              l4="Obedience & Behavior Excellence."
              l5="Polished Greetings Training (Hi, Hello,Namaste)"
              l6="Sophisticated Feedback Intelligence."
              l7="Advanced Walking."
              l8="Commands Clear and Precise Instructions."
              l9="Training with Rewards."
              l10="Complimentary Pet Products."
              l11="Free Consultation."
            />
          </div>
          <div className="col-md-4">
            <Price
              title1="(48 Sessions, 4 Month)"
              title2="₹ 42,000"
              title3="Premium Training"
              l1="Refined Social Etiquette (Sit, Stay, Walk, etc.)"
              l2="Masterful Leash Skills."
              l3="Advanced Pee/Potty Mastery."
              l4="Obedience & Behavior Excellence."
              l5="Polished Greetings Training (Hi, Hello,Namaste)"
              l6="Sophisticated Feedback Intelligence."
              l7="Advanced Walking."
              l8="Commands Clear and Precise Instructions."
              l9="Training with Rewards."
              l10="Complimentary Pet Products."
              l11="Free Consultation."
            />
          </div>
          {/* <div className="col-md-4">
            <Price
              title1="(48 Sessions, 4 Month)"
              title2="₹ 54,000"
              title3="Smart Training"
              l1="Savvy Commands – Bedtime, Fetch the Newspaper, and More Numerical Prowess"
              l2="Counting from 1 to 5 Next-Level Play – Hula Hoop Jumps, Fetch and Play, Spins, etc ."
              l3="Elevated Greetings – Namaste, Shake Hands, High Five, etc"
              l4="Unleashed Freedom Walking Sophisticated Social Etiquette – No Pulling, No Biting, etc"
              l5="Ground-Level Acrobat Mastery – Crawl, Rollover, Lie Down, Sleep"
              l6="Feedback Mastery for a Well-Trained Companion"
              l7="Advanced Walking."
              l8="Commands Clear and Precise Instructions."
              l9="Training with Rewards."
              l10="Complimentary Pet Products."
              l11="Free Consultation."
            />
          </div> */}
        </div>
      </div>
      <div className="container-service">
        <div className="container">
          <Feedback />
        </div>
      </div>
      <div className="container-service">
        <div className="container">
          <h2
            className="agency-heading pb-5 d-flex justify-content-center"
            style={{ color: "#393d72" }}
          >
            Our Other Services
          </h2>
          <div className="row">
          <div className="col-md-3">
            <Services img={imageData.vets.src} title="Vets at Home" />
          </div>
          <div className="col-md-3">
            <Services img={imageData.walking.src} title="Dog Walking" />
          </div>
          <div className="col-md-3">
            <Services
              img={imageData.sitting.src}
              title="Pet Sitting"
            />
          </div>
          <div className="col-md-3">
            <Services img={imageData.grooming.src} title="Pet Grooming" />
          </div>
        </div>
        </div>

       
      </div>
    </div>
  );
}

export default App;
