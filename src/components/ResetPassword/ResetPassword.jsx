import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
// import { resetActions } from '../../store/resetToken';
import axios from "axios";
import { useHistory } from "react-router";

const BASE_URL = "https://jobs-api.squareboat.info/api/v1";

const ResetPassword = () => {
  const token = useSelector((state) => state.resetToken.resetToken);
  const history = useHistory();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(true);
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const resetPassword = (e) => {
    e.preventDefault();
    console.log(password);
    console.log(confirmPassword);
    // eslint-disable-next-line
    password == confirmPassword
      ? setPasswordValid(true)
      : setPasswordValid(false);
    // console.log(passwordValid)

    if (passwordValid) {
      const resetPassword = async () => {
        setLoading(true);
        let data = {
          token,
          password,
          confirmPassword,
        };
        try {
          const res = await axios.post(`${BASE_URL}/auth/resetpassword`, data);
          if (res.data) {
            setSuccessMsg("Password Reset Successfully..Redirecting..");
            setTimeout(() => {
              history.push("/login");
              
            }, 600);

          }
        } catch (e) {
          setSuccessMsg("");

          // setErrorMsg("  There is Some Error..Please Try Again");
          setLoading(false);
        }
      };

      resetPassword();
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
            <h3>Reset Your Password</h3>
            <Form onSubmit={resetPassword}>
              <Form.Text
                style={{ marginBottom: "20px" }}
                className="text-muted mb-3"
              >
                Enter Your new password below.
              </Form.Text>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  placeholder="Enter password"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm New Password</Form.Label>
                <Form.Control
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  type="password"
                  placeholder="Enter password"
                  required
                />

                {!passwordValid && (
                  <Form.Text style={{ color: "red" }} className="text-error">
                    Password do not Match
                  </Form.Text>
                )}
                {loading && (
                  <Form.Text style={{ color: "#000" }} className="text-error">
                    Loading....
                  </Form.Text>
                )}

                {successMsg.length > 3 && (
                  <Form.Text style={{ color: "#43AFFF" }} className="text-error">
                    {successMsg}
                  </Form.Text>
                )}
              </Form.Group>

              <div className="text-center">
                <Button variant="primary" className="p-2 mb-4" type="submit">
                  Reset
                </Button>
              </div>
            </Form>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ResetPassword;
