import React,{useState} from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from 'axios';
import {useDispatch} from 'react-redux';
import { resetActions } from "../../store/resetToken";
import {useHistory} from 'react-router-dom';

const BASE_URL="https://jobs-api.squareboat.info/api/v1"

const ForgetPassword = () => {
  const [email, setEmail] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [successMsg, setSuccessMsg] = useState('');

  const dispatch=useDispatch();
  const history=useHistory();

  const forgotPassword=(e)=>{
    e.preventDefault();

    if(email.length >0 || email.includes('@')){

      const forgetPassword=async ()=>{
        try{
          setSuccessMsg("Loading....")

          const res=await axios.get(`${BASE_URL}/auth/resetpassword?email=${email}`);
          if(res.data){
            setSuccessMsg("Loading....")
          setErrorMsg('')

          }
            const token=res.data.data.token;
            // console.log(token)
            if(token){
              const result=await axios.get(`${BASE_URL}/auth/resetpassword/${token}`)
              if(result.data.success){
                  dispatch(resetActions.setResetToken({token}))
                  history.push('/resetpassword')
              }
            }

        }
        catch(e){
          console.log(e)
          setSuccessMsg("")

          setErrorMsg('Email id does not exist in our database')
        }
        }
      forgetPassword()
    }

  }
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
          <div className="form-responsive"
            style={{
              width: "40vw",
              backgroundColor: "#fff",
              padding: "40px",
              borderRadius: "20px",
            }}
          >
            <h3>Forgot your password ?</h3>
            <Form onSubmit={forgotPassword}>
                <Form.Text className="text-muted mb-3">
                  Enter Your email to recieve password reset link.
                </Form.Text>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" required/>
                {errorMsg.length>3 && <Form.Text style={{color:'red'}} className="text-error">
                      {errorMsg}.
    </Form.Text>}
                {successMsg.length>3 && <Form.Text style={{color:'#000'}} className="text-error">
                      {successMsg}.
    </Form.Text>}
              </Form.Group>

              
              <div className="text-center">
                <Button variant="primary" className="p-2 mb-4" type="submit">
                  Submit
                </Button>
                
              </div>
            </Form>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ForgetPassword;
