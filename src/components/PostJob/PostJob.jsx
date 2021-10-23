import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router";

const BASE_URL = "https://jobs-api.squareboat.info/api/v1";

const PostJob = () => {
  const token = useSelector((state) => state.loginSlice.loginToken);
  // console.log(token)

  const history=useHistory();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [jobCreated, setJobCreated] = useState(false);

  const postJob = async (e) => {
    e.preventDefault();
    setLoading(true);

    let data = {
      title: `${title}`,
      description: `${description}`,
      "job description": `${description}`,
      location: `${location}`,
    };

    try {
      await axios.post(`${BASE_URL}/jobs`, data, {
        headers: { Authorization: `${token}` },
      });

      setJobCreated(true)
      setTimeout(()=>{

        history.push('/jobs')
      },1500)
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setErrorMsg("Error Creating Job");
    }
  };

  return (
    <>
      <div style={{ backgroundColor: "#1A253C", height: "200px" }}>
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "100px 100px 0px 100px",
          }}
        >
          <div
            className="form-responsive"
            style={{
              width: "40vw",
              backgroundColor: "#fff",
              padding: "40px",
              borderRadius: "20px",
            }}
          >
            <h3>Post a Job</h3>
            <Form onSubmit={postJob}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Job Title*</Form.Label>
                <Form.Control
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="Enter job title"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Description*</Form.Label>
                <Form.Control
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  as="textarea"
                  rows={4}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Location*</Form.Label>
                <Form.Control
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  type="text"
                  placeholder="Enter Location"
                  required
                />
                {errorMsg.length > 3 && (
                  <Form.Text style={{ color: "red" }} className="text-error">
                    {errorMsg}
                  </Form.Text>
                )}
                {loading && (
                  <Form.Text style={{ color: "#000" }} className="text-error">
                    Loading...
                  </Form.Text>
                )}
                {jobCreated && (
                  <Form.Text style={{ color: "#43AFFF" }} className="text-error">
                    Job Created Successfully Redirecting...
                  </Form.Text>
                )}
              </Form.Group>

              <div className="text-center">
                <Button variant="primary" className="p-2 mb-4" type="submit">
                  Post
                </Button>
              </div>
            </Form>
          </div>
        </Container>
      </div>
    </>
  );
};

export default PostJob;
