import React from 'react';
import {Card,Button} from 'react-bootstrap'

const ApplicantCard = () => {
    return (
        <div style={{width:"45%",justifySelf:'space-between'}}>
        <Card style={{ width:'auto',margin:"20px"}}>
  <Card.Img style={{height:'40px'}} variant="top" src="https://ih1.redbubble.net/image.421230716.2120/flat,750x,075,f-pad,750x1000,f8f8f8.u3.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>
    )
}

export default ApplicantCard
