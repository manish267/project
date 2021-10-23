import React from 'react';
import {Card,} from 'react-bootstrap'

const CardComp = (props) => {
    return (
            <Card style={{'margin':'10px'}}>
  <Card.Body>
    <Card.Title style={{color:"#43AFFF"}}>{props.title}</Card.Title>
    <Card.Text style={{"marginTop":'30px'}}>
      {props.description}
    </Card.Text>
  </Card.Body>
</Card>
            
    )
}

export default CardComp
