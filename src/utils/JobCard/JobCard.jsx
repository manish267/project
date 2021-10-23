import React,{useState} from "react";
import { Card } from "react-bootstrap";
// import ApplicantCard from "../ApplicantCard/ApplicantCard";
// import Modal from "../Modal/Modal";

const JobCard = () => {
  // eslint-disable-next-line 
     const [isOpen, setIsOpen] = useState()
  return (
    <>
      <Card style={{ width: "16rem",fontSize:'14px',marginBottom:"20px" }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div style={{textAlign:'center',paddingTop:'10px',display:'flex'}}>
          <img style={{height:'20px'}} src="https://www.iconpacks.net/icons/2/free-location-icon-2955-thumb.png" alt="location"/>
          <p >Bengluru</p>
            </div>
          <button onClick={()=>setIsOpen(true)} style={{border:'none',color:'#000',background:'#43AFFF33'}} open={true}>View Applications</button>
          </div>
        </Card.Body>
      </Card>
            {/* <Modal open={isOpen} onClose={()=>setIsOpen(false)}>
              
          </Modal> */}
    </>
  );
};

export default JobCard;
