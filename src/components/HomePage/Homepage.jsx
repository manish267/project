import React from "react";
import "./Homepage.css";
import { Button, Container, Image } from "react-bootstrap";
import CardComp from "../../utils/Card/CardComp";
import CompanyComp from "../../utils/CompanyComp/CompanyComp";
import {Link} from 'react-router-dom';

const Homepage = () => {
  
  return (
    <>
      <div style={{ backgroundColor: "#1A253C", height: "350px" }}>
        <Container
          className="home-container"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div>
            <div
              className="text-white"
              style={{
                fontSize: "40px",
                padding: "50px 50px 40px 50px",
                fontWeight: "20px",
              }}
            >
              Welcome to <br />
              My
              <span style={{ color: "#43AFFF", fontWeight: "20px" }}>
                {" "}
                Jobs
              </span>
            </div>
            <Link to='/login'>
            <Button variant="primary" style={{ marginLeft: "45px" }}>
              Get Started
            </Button>
            </Link>
          </div>
          <Image
            className="home-image"
            style={{
              height: "300px",
              borderRadius: "30px",
              marginRight: "70px",
              marginTop: "90px",
            }}
            src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8am9ifGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
        </Container>
      </div>

      <div style={{ backgroundColor: "#557DA526" }}>
        <Container
          bg="primary"
          style={{ paddingTop: "70px", paddingBottom: "60px" }}
        >
          <h3 style={{ color: "#303F60" }}>Why Us</h3>

          <div className="d-flex justify-content-between homeCard">
            <CardComp
              title="Get More Visibility"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
            />
            <CardComp
              title="Organize Your candidates"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
            />
            <CardComp
              title="Verify Their Abilities"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
            />
          </div>
        </Container>
        <Container>

          <h4>Companies Who Trust Us</h4>
          <div style={{'display':"flex",'justifyContent':"space-between",flexWrap:'wrap'}}>
                <CompanyComp image="https://uilogos.co/img/logotype/solaytic.png" name="solaytic" />
                <CompanyComp image="https://uilogos.co/img/logotype/solaytic.png" name="solaytic" />
                <CompanyComp image="https://uilogos.co/img/logotype/solaytic.png" name="solaytic" />
                <CompanyComp image="https://uilogos.co/img/logotype/solaytic.png" name="solaytic" />
                <CompanyComp image="https://uilogos.co/img/logotype/solaytic.png" name="solaytic" />
                

          </div>
          <div style={{'display':"flex","justifyContent":"space-around",flexWrap:'wrap'}}>
          <CompanyComp image="https://uilogos.co/img/logotype/solaytic.png" name="solaytic" />
          <CompanyComp image="https://uilogos.co/img/logotype/solaytic.png" name="solaytic" />
          <CompanyComp image="https://uilogos.co/img/logotype/solaytic.png" name="solaytic" />
          <CompanyComp image="https://uilogos.co/img/logotype/solaytic.png" name="solaytic" />

          </div>
        </Container>
      </div>
    </>
  );
};

export default Homepage;
