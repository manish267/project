

import React from 'react';
import {Modal} from 'react-bootstrap';
import ApplicantCard from "../ApplicantCard/ApplicantCard";


const ModalOverlay = ({show,onHide,id}) => {
  console.log(id)
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







/*
import React from "react";
import ReactDom from "react-dom";
import ApplicantCard from "../ApplicantCard/ApplicantCard";

const MODAL_STYLES = {
  position: 'relative',
  // top:'50%',
  // left:'50%',
//   top: '50%',
//   left: '50%',
  // transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
//   padding: '50px',
  zIndex: 1001,
  overflowY:'auto'
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  height:'auto',
  width:'auto',
  backgroundColor: '#000',
  opacity:1,
  zIndex: 1000,
  display:'flex',
  justifyContent:'center',
  alignItems:"center"
}

function Modal({ open, children, onClose }) {
//   if (!open) return null;

//   return ReactDom.createPortal(
//     <>
//       <div style={OVERLAY_STYLES} />
//       <div style={MODAL_STYLES}>
//         <button onClick={onClose}>Close Modal</button>
//         {children}
//       </div>
//     </>,
//     document.getElementById("portal")
//   );

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <div
          style={{
            width: "70%",
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid #43AFFF33",
            marginBottom: "0 auto",
          }}
        >
          <h4>Applicants for this job</h4>

          <button style={{ border: "none" }} onClick={onClose}>
            X
          </button>
          {children}
        </div>
        <p>Total {} applications</p>
        <div
          style={{
            backgroundColor: "#EDF6FF",
            display: "flex",
            width: "100%",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          {/* <ApplicantCard /> 
          {/* <ApplicantCard />
          <ApplicantCard /> 
          /*
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default Modal;


*/