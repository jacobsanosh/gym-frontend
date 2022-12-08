import React from "react";
import "./OurServices.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import OurServiceData from '../../data/OurServiceData'
function OurServices() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <h1>Our Services</h1>
      <Carousel responsive={responsive}>
        {OurServiceData.map((items,index)=>{
          return( 
          <div className="serv__items" key={index}>
            {console.log(items.url)}
          <img src={items.url} alt="" />
          <p>{items.type}</p>
        </div>)
        })}
      </Carousel>
    </div>
  );
}

export default OurServices;
