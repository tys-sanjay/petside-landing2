import React from "react";
import imageData from "../imgData";

function Carousel() {
  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide overlay1"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="1000">
            <img
              src={imageData.dogtrain.src}
              className="d-block w-100 carousel-height"
              alt="..."
            />
             <div className="overlay2"></div>
            <div className="carousel-caption carousel-caption2 d-md-block carousel-btn">
              <h5 className="span-color ">
                <span>Most Trusted Dog Training Services  </span>at your doorstep in Mumbai &
                Pune <br></br><br></br><span>Get FREE paw cleaner</span> on choosing a package of <span>2 months or
                more.</span><br></br><br></br>
                <span>FREE Meal plan </span>on choosing a package of <span>1 month or more</span>
              </h5>
              {/* <p></p> */}
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <img
              src={imageData.maledog.src}
              className="d-block w-100 carousel-height"
              alt="..."
            />
            <div className="overlay2"></div>
            <div className="carousel-caption carousel-caption2 d-md-block carousel-btn">
            <h5 className="span-color ">
                <span>Most Trusted Dog Training Services  </span>at your doorstep in Mumbai &
                Pune <br></br><br></br><span>Get FREE paw cleaner</span> on choosing a package of <span>2 months or
                more.</span><br></br><br></br>
                <span>FREE Meal plan </span>on choosing a package of <span>1 month or more</span>
              </h5>
              {/* <p>Most Trusted Dog Training Services at your doorstep in Mumbai & Pune

Get FREE paw cleaner on choosing a package of 2 months or more.

FREE Meal plan on choosing a package of 1 month or more</p> */}
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev carousel-btn"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next carousel-btn"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
     
    </>
  );
}

export default Carousel;
