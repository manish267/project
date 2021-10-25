

import React from 'react';
import {Modal} from 'react-bootstrap';
// import ReactDom from 'react-dom';
import ApplicantCard from "../ApplicantCard/ApplicantCard";


const ModalOverlay = ({show,onHide,id}) => {
  // console.log(id)
  return (
    <div >
       <div style={{width:'50%'}}>
       <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title style={{borderBotoom:'1px solid #43AFFF33'}}>Applicants for this job</Modal.Title>
        </Modal.Header>
        
        <div style={{width:'95%',margin:'0 auto'}}>

        <h5>Total Applicants</h5>
        </div>

        <div className="modal-overlay" style={{width:"95%",overflowY:'auto',display:'flex',justifyContent:'space-between',flexDirection:'row',flexWrap:'wrap',margin:'0  auto'
        }}>
        <ApplicantCard />
        <ApplicantCard />
        <ApplicantCard />
        <ApplicantCard />
        <ApplicantCard />
        </div>
        {/*
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          
          
        </Modal.Footer> */}
      </Modal>
        </div>
    </div>
  )
}

export default ModalOverlay

