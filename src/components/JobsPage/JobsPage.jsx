import React from "react";
import { Container } from "react-bootstrap";
import JobCard from "../../utils/JobCard/JobCard";

const JobsPage = () => {
  return (
    <>
      <div style={{ backgroundColor: "#1A253C", height: "200px" }}>
        <Container
          style={{
            display: "flex",
            // justifyContent: "center",
            padding: "50px 50px 0px 100px",
          }}
        >
            <h3 style={{color:"#fff"}}>Jobs posted by you</h3>
        </Container>
          <div style={{width:'100%'}}>

            <div style={{width:'80%',margin:'20px auto',display:'flex',flexWrap:'wrap',justifyContent:'space-evenly'}}>
                <JobCard/>
                <JobCard/>
                <JobCard/>
                <JobCard/>
                <JobCard/>
                <JobCard/>
                <JobCard/>
                <JobCard/>
                <JobCard/>
                <JobCard/>
                <JobCard/>
            </div>
          </div>

        

          
      </div>
    </>
  );
};

export default JobsPage;
