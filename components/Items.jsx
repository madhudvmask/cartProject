import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Items({name,price,description,img,btn,addToCart}) {
   
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
      <Card.Text>
        {price}
      </Card.Text>
      <Button variant="primary" onClick={addToCart} >{btn}</Button>
    </Card.Body>
  </Card>
    
  )
}


