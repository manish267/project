import React from "react";
import ReactDom from "react-dom";
import ApplicantCard from "../ApplicantCard/ApplicantCard";

const MODAL_STYLES = {
  position: 'absolute',
  top:'10%',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
//   padding: '50px',
  zIndex: 1001,
  overflowY:'auto'
}

const OVERLAY_STYLES = {
  position: 'absolute',
  top: 0,
  left: 0,
  height:'100vh',
  width:'100vw',
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
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
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid #43AFFF33",
            marginBottom: "10px",
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
          <ApplicantCard />
          <ApplicantCard />
          <ApplicantCard />
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default Modal;
