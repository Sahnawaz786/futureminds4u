import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { PiCards } from 'react-icons/pi';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cards = ()=>{
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/python.jpeg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;