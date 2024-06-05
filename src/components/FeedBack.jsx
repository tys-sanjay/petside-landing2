import React from "react";
import { reviews } from './reviewData';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

function Feedback(){

    return(
        <>
        <h1 style={{ color: "#393d72" }} className="p-5">Here's what our happy pet parents are saying about us</h1>
        <div>
            <Splide options={{perPage:1}}>
            {
             reviews.map((review) => (
                <SplideSlide key={review.id}>
                    <div className=" container feedback-flex">
                    <img src={review.image} alt=""  className="test-img"/>
                    <div className="content">
                    <p className="text">{review.name}</p>
                        <p className="text">{review.text}</p>
                    </div>
                    </div>
                  
                </SplideSlide>
             ))
            }
            </Splide>
        </div>
        </>
    )
}
 export default Feedback;