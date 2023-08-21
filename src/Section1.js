import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import caro1 from "./image/caro1.jpg";
import caro2 from "./image/caro2.webp";
import caro3 from "./image/caro3.jpeg";
import caro4 from "./image/caro4.jpg";

const imageStyle = {
  width: '100%',
  height: '600px',
};

const itemStyle = {
  backgroundPosition: 'center',
  backgroundSize: 'cover',
};

function IndividualIntervalsExample() {
  return (
    <Carousel className='al'>
      <Carousel.Item interval={1000} style={itemStyle}>
        <img src={caro1} alt="Carousel 1" style={imageStyle} />
        <Carousel.Caption className='words'>
        <h2>Your creativity unleashed.</h2>
        <p>Explore the world of photography with our advanced camera collection.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}style={itemStyle}>
        { <img src={caro2} alt="Carousel 1" style={imageStyle} />}
      </Carousel.Item>
      <Carousel.Item interval={500}style={itemStyle}>
      { <img src={caro3} alt="Carousel 1" style={imageStyle} />}
      
      </Carousel.Item>
      <Carousel.Item interval={500}style={itemStyle}>
      { <img src={caro4} alt="Carousel 1" style={imageStyle} />}
      
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;


