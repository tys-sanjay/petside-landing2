import React,{ useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import Popup from "./popup";
import ContactForm from "./ContactForm";

function Price(props) {
const  [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="">
            <div className="card1">
              <div className="">
                <div className="">
                  {/* <h5>(12 Sessions, 1 Month)</h5> */}
                  <h5>{props.title1}</h5>
                </div>
                <div className="d-flex justify-content-end">{props.title2}</div>
                <div className="">
                  <h5>{props.title3}</h5>
                </div>
                <div className="">
                  <div className="d-flex justify-content-between align-items-start list-style">
                    <h6>{props.l1}</h6>
                    <CheckIcon />
                  </div>
                  <div className="d-flex justify-content-between align-items-start list-style">
                    <h6>{props.l2}</h6>
                    <CheckIcon />
                  </div>
                  <div className="d-flex justify-content-between align-items-start list-style">
                    <h6>{props.l3}</h6>
                    <CheckIcon />
                  </div>
                  <div className="d-flex justify-content-between align-items-start list-style">
                    <h6>{props.l4}</h6>
                    <CheckIcon />
                  </div>
                  <div className="d-flex justify-content-between align-items-start list-style">
                    <h6>{props.l5}</h6>
                    <CheckIcon />
                  </div>
                  <div className="d-flex justify-content-between align-items-start list-style">
                    <h6>{props.l6}</h6>
                    <CheckIcon />
                  </div>
                  {/* <div className="d-flex justify-content-between align-items-start list-style">
                    <h6>{props.l7}</h6>
                    <CheckIcon />
                  </div>
                  <div className="d-flex justify-content-between align-items-start list-style">
                    <h6>{props.l8}</h6>
                    <CheckIcon />
                  </div>
                  <div className="d-flex justify-content-between align-items-start list-style">
                    <h6>{props.l9}</h6>
                    <CheckIcon />
                  </div>
                  <div className="d-flex justify-content-between align-items-start list-style">
                    <h6>{props.l10}</h6>
                    <CheckIcon />
                  </div>
                  <div className="d-flex justify-content-between align-items-start list-style">
                    <h6>{props.l11}</h6>
                    <CheckIcon />
                  </div> */}
                </div>
              </div>
              <div className={props.ss} >
                <div className="pt-1 d-flex justify-content-center">
                  <a href="https://api.whatsapp.com/send/?phone=%2B917977634796&text&type=phone_number&app_absent=0" type="button" class="btn btn-dark">
                    Book Now
                  </a>
                </div>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                  <ContactForm />
                </Popup>
                <div className="py-2 d-flex justify-content-center">
                  <button onClick={() => setButtonPopup(true)}  type="button" class="btn btn-info">
                    Book Trial Session Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Price;
