import React from 'react';
import {Card} from 'react-bootstrap'

const ApplicantCard = () => {
    return (
        <div className="modal-card" style={{width:"50%",justifyContent:'space-between'}}>
        <Card style={{ width:'auto',margin:"20px"}}>
  <Card.Body>
  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
  <img style={{height:'35px'}} src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png" alt ="userPhoto"/>
      <div>
    <p style={{padding:'0',margin:'0'}}>Manish Yadav</p>
    <p>m@gmail.com </p>
    </div>
    </div>
      <br />
      <p style={{padding:0,margin:0}}>Skills </p>
    <Card.Text>
      Reactjs,Nodejs,MongoDb
    </Card.Text>
  </Card.Body>
</Card>
</div>
    )
}

export default ApplicantCard
