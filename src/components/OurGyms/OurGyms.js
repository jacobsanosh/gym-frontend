import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./OurGyms.css";
import OurGymData from "../../data/OurGymData";
function OurGyms() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <h1>Our Gyms</h1>
      <Carousel responsive={responsive}>
        {OurGymData.map((items,index) => {
          return (
            <div className="gym__container" key={index}>
              <div className="gym__left">
                <img src={items.url} alt="" />
              </div>
              <div className="gym__right">
                <p>Name:{items.name}</p>
                <p>Place:{items.place} </p>
                <p>Phone:{items.phone}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default OurGyms;
