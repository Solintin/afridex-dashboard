import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import MainCard from "./MainCard";

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel showStatus={false} showIndicators={false}>
    
          {[...Array(3)].map((i, idx) => {
            return <MainCard key={idx} />;
          })}
        
      </Carousel>
    );
  }
}

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

export default DemoCarousel;
// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
