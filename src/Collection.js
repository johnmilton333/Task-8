import React from 'react'
import { Container,  Card, Row, Col } from 'react-bootstrap'

const places =
  [
    {
      'id': 1,
      'name': 'Canon EOS Rebel T1i ',
      'image': '111.webp',
      'description': 'Your Canon EOS Rebel T1i/500D offers a first-ever feature for digital SLR cameras. '
    },
    {
      'id': 2,
      'name': 'Nikon D90 DX ',
      'image': '222.jpg',
      'description': 'Nikon D90, you can record your videos at a highest resolution of 1280 x 720 at 24 fps. '
    },
    {
      'id': 3,
      'name': 'Nikon D3500 ',
      'image': '333.jpg',
      'description': 'The Nikon D3500 is an entry-level 24.2-megapixel DX format DSLR Nikon . '
    },
    {
      'id': 4,
      'name': 'Nikon D7500 ',
      'image': '444.jpg',
      'description': 'The Nikon D7500 is a 20.9-megapixel digital single-lens reflex camera using an APS-C sensor. '
    },
    {
      'id': 5,
      'name': 'Canon EOS 6D Mark II ',
      'image': '11101.avif',
      'description': 'The Canon EOS 6D Mark II is a 26.2-megapixel full-frame digital single-lens reflex camera. '
    },
    {
      'id': 6,
      'name': 'Nikon D850 ',
      'image': '666.avif',
      'description': 'the D850 deserves to be taken seriously even now, because its going to appeal to so many users.'
    },
    {
      'id': 7,
      'name': 'Nikon D780 ',
      'image': '777.jpg',
      'description': 'The Nikon D780 is a full-frame DSLR camera announced by Nikon on January 6, 2020.  '
    },
    {
      'id': 8,
      'name': ' Nikon D810',
      'image': '999.jpg',
      'description': 'Nikon has added to the video capabilities of the D810 over the D800 by expanding 1080p. '
    }
  ]

function Destination() {
  return (
    <div  className='final'>
        <h1>Collections</h1>
      <Container fluid>
        <Container className='destination'>
          <Row className='des-row'>
            {places.map((place) => (
              <Col key={place.id} sm={6} md={3} className='p-2'>
                <Card key={place.id} style={{ width: '18rem', height:"320px" } }>
                  <Card.Img variant="top" src={require(`./image/${place.image}`)} alt={place.name} className='p-2 des-row-img' />
                  <Card.Body className='text-center'>
                    <Card.Title>{place.name}</Card.Title>
                    <Card.Text>
                      {place.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}



          </Row>
        </Container>
      </Container>
      
    </div>
  )
}

export default Destination;
