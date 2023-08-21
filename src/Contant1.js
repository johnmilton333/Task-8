import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Aboutus() {
  return (
    <div className="files1">
      <h1>About Us</h1>
      <Card style={{ width: '30rem', height: '600px' }} className='blue1'>
        <Card.Img variant="top"  className='img1' />
        <Card.Body>
          <Card.Title>Courses</Card.Title>
          <Card.Text>
             Exposure is one of the fundamental concepts in photography. Courses teach how to control exposure using aperture, shutter speed, and ISO to achieve the desired level of brightness in a photo.
          </Card.Text>
          <Button variant="primary">Click here</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '30rem', height: '600px' }} className='blue1'>
        <Card.Img variant="top"className='img2' />
        <Card.Body>
          <Card.Title>Product Accessories</Card.Title>
          <Card.Text>
           Camera accessories, such as lenses, tripods, and filters, enhance photography by offering creative options, stability, and effects. These tools expand your capabilities and improve image quality, catering to diverse shooting needs. Selecting the right accessories enhances your gear's performance and supports your artistic vision.
          </Card.Text>
          <Button variant="primary">Contact Us</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '30rem', height: '600px' }} className='blue1'>
        <Card.Img variant="top" className='img3' />
        <Card.Body>
          <Card.Title>Editzz</Card.Title>
          <Card.Text>
           Editing software empowers photographers and videographers to refine their work, offering tools for color correction, retouching, and creative adjustments.
          </Card.Text>
          <Button variant="primary">Pick up</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Aboutus;
