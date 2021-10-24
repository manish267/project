import React,{useState} from "react";
import { Card } from "react-bootstrap";
// import ApplicantCard from "../ApplicantCard/ApplicantCard";
import ModalOverlay from "../Modal/Modal";

const JobCard = (props) => {
  // console.log(props.id)
  // eslint-disable-next-line 
     const [show, setShow] = useState()

     const handleShow=()=>{
      setShow(true)
     }

     const handleClose=()=>{
      setShow(false)
     }
  return (
    <>
      <Card style={{ width: "16rem",fontSize:'14px',marginBottom:"20px" }}>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
           {props.description}
          </Card.Text>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div style={{textAlign:'center',paddingTop:'10px',display:'flex'}}>
          <img style={{height:'20px'}} src="https://www.iconpacks.net/icons/2/free-location-icon-2955-thumb.png" alt="location"/>
          <p >{props.location}</p>
            </div>
          <button onClick={handleShow} style={{border:'none',color:'#000',background:'#43AFFF33'}} open={true}>View Applications</button>
          </div>
        </Card.Body>
      </Card>
            <ModalOverlay id={props.id} show={show} onHide={handleClose}>
              
          </ModalOverlay>
    </>
  );
};

export default JobCard;
