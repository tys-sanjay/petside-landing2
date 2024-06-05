import React from "react";
import imageData from "../imgData";
import CheckIcon from "@mui/icons-material/Check";

function Agency() {
  return (
    <>
      <div className="container agency-container py-5">
        <div className="row">
          <div className="col-md-6 exper2">
            <div className="parent-position dm">
              <img src={imageData.aboutimg.src} className="img-fluid dm2" />
              {/* <img  src={imageData.maskimg.src} className="child-position img-fluid"/> */}
            </div>
            <div className="exper2">
                 
            </div>
          </div>
          <div className="col-md-6">
            <h5 className="agency-heading">Best Agency For Your Pet.</h5>
            <p>
              <span style={{ fontWeight: "400" }}>
                Welcome to Petside India, where your pet’s well-being is our top
                priority. With a team of certified trainers, we’ve helped over
                580 pets undergo remarkable transformations, turning ruffs into
                riches and barks into brilliance.
              </span>
            </p>
            <p>
              <span style={{ fontWeight: "400" }}>
                Our Trusted and Caring Trainers are committed to personalized
                pet partnerships, understanding that each furry friend is
                unique. Whether you’re in Mumbai or Pune, our dog training
                services are conveniently available near you, ensuring your pet
                receives the attention they deserve.
              </span>
            </p>
            <p>
              <span style={{ fontWeight: "400" }}>
                At Petside India, we believe in flexibility, offering training
                sessions at your convenient time to fit seamlessly into your
                lifestyle. Our goal is to provide a 5-star experience tailored
                to your needs, ensuring both you and your pet feel supported
                every step of the way.
              </span>
            </p>
            <div className="row">
              <div className="col-sm-6">
                <div className="d-flex align-items-center text-style">
                  <CheckIcon />
                  <h6 className="px-1 pt-1">Free meal plan</h6>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center text-style">
                  <CheckIcon />
                  <h6 className="px-1 pt-1">Free Paw Cleaner</h6>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center text-style">
                  <CheckIcon />
                  <h6 className="px-1 pt-1">
                    Training at your convenient time & location
                  </h6>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center text-style">
                  <CheckIcon />
                  <h6 className="px-1 pt-1">
                    Personalized consultation for pet parents
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Agency;
