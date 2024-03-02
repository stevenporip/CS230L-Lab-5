import React from 'react';
import { Card } from 'react-bootstrap';

const CustomCard = () => {
  return(
    <div style={{ display: 'flex', justifyContent: 'center'}}>
      <Card style={{ width: '20rem', margin: '20px', backgroundColor: 'blue'}}>
       <Card.Body>
          <Card.Title style={{ borderBottom: '2px solid white', color: 'white'}}>Card 01</Card.Title>
          <Card.Text style={{ color: 'white' }}>
            Some quick example text to build on the card title and make up the bulk of the cards content
          </Card.Text>
       </Card.Body>
      </Card>
      <Card style={{ width: '20rem', margin: '20px', backgroundColor: 'red'}}>
       <Card.Body>
          <Card.Title style={{ borderBottom: '2px solid white', color: 'white'}}>Card 02</Card.Title>
          <Card.Text style={{ color: 'white' }}>
            Some quick example text to build on the card title and make up the bulk of the cards content
          </Card.Text>
       </Card.Body>
      </Card>
      <Card style={{ width: '20rem', margin: '20px', backgroundColor: 'green'}}>
       <Card.Body>
          <Card.Title style={{ borderBottom: '2px solid white', color: 'white'}}>Card 03</Card.Title>
          <Card.Text style={{ color: 'white' }}>
            Some quick example text to build on the card title and make up the bulk of the cards content
          </Card.Text>
       </Card.Body>
      </Card>
    </div>
  );
}

export default CustomCard;