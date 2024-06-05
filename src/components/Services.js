import React from "react";

function Services(props) {
  return (
    <>
      <div className="container-services">
        <div className="container">
          <div class="row">
            
            <div class="colss">
              <div class="card h-100">
                <img src={props.img} class="card-img-top card-img" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{props.title}</h5>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
