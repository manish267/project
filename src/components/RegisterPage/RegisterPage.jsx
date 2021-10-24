import React,{useState} from 'react';
import {Container,Button,Form,Row,Col} from 'react-bootstrap';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';
import './RegisterPage.css'

const BASE_URL="https://jobs-api.squareboat.info/api/v1"

const RegisterPage = () => {

  const history=useHistory();
  
  const [email, setEmail] = useState('')
  const [emailValid, setEmailValid] = useState(true);
  const [name, setName] = useState('')
  const [nameValid, setNameValid] = useState(true);
  const [password, setPassword] = useState('')
  const [passwordValid, setPasswordValid] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState('')
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [skills, setSkills] = useState('')
  const [errorMsg, setErrorMsg] = useState('')


  const formHandler=(e)=>{
    e.preventDefault();

  name.length >3 ?setNameValid(true):setNameValid(false)
  email.includes('@') ?setEmailValid(true):setEmailValid(false)
  password.length >3  ?setPasswordValid(true):setPasswordValid(false)
  password.length >3  ?setConfirmPasswordValid(true):setConfirmPasswordValid(false)
  password===confirmPassword ? setPasswordMatch(true) :setPasswordMatch(false);
  const data={
    name:name,
    email:email,
    userRole:0,
    password:password,
    confirmPassword:confirmPassword
  }

  async function registerUser(){
    try{
      
      const result=await axios.post(`${BASE_URL}/auth/register`,data
      )
  
      if(result.data.success){
      setErrorMsg("")

        history.push('/login')
      }
    }catch(e){
      setErrorMsg("Error Occurred")
    }


  }

    registerUser()
  }

    return (
        <>
        <div style={{'backgroundColor':"#1A253C",height:"200px"}}>
        <Container style={{display:'flex',justifyContent:"center",alignItems:'center',padding:"100px 100px 0px 100px"}}>
        <div className="form-responsive" style={{backgroundColor:"#fff",padding:"40px",borderRadius:"20px"}}>
        <h3>SignUp</h3>
        <Form onSubmit={formHandler}>
  <Form.Group className="mb-3" >
    <Form.Label>Full Name*</Form.Label>
    <Form.Control type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your Full Name" />
    {!nameValid && <Form.Text style={{color:'red'}} className="text-error">
      The field is required.
    </Form.Text>}
  </Form.Group>

  <Form.Group className="mb-4" >
    <Form.Label>Email address*</Form.Label>
    <Form.Control type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
    {!emailValid && <Form.Text style={{color:'red'}} className="text-error">
      The field is required.
    </Form.Text>}
  </Form.Group>

  <Form.Group className="mb-3" >

  <Row>
    <Col>
    <Form.Label>Create Password*</Form.Label>

      <Form.Control  value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter Your Password" />
      {!passwordValid && <Form.Text style={{color:'red'}} className="text-error">
      The field is required.
    </Form.Text>}
    </Col>
    <Col>
    <Form.Label>Confirm Password*</Form.Label>

      <Form.Control  value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} type="password" placeholder="Enter Your Password" />
      {!confirmPasswordValid && <Form.Text style={{color:'red'}} className="text-error">
      The field is required.
    </Form.Text>}
      {!passwordMatch && <Form.Text style={{color:'red'}} className="text-error">
      Password Donot Match.
    </Form.Text>}
    </Col>
  </Row>
  </Form.Group>


  <Form.Group className="mb-3">
    <Form.Label>Skills</Form.Label>
    <Form.Control value={skills} onChange={(e)=>setSkills(e.target.value)} type="text" placeholder="Enter Comma Seperated Skills" />
      {errorMsg.length >3 && <Form.Text style={{color:'red'}} className="text-error">
      {errorMsg}
    </Form.Text>}
  
  </Form.Group>
      <div className="text-center">
  <Button variant="primary" className="p-2 mb-4"  type="submit">
    SignUp
  </Button>
      <h6>Have an Account?<Link to="/login" style={{textDecoration:"none"}}> Login</Link></h6>
    </div>
</Form>
</div>

        </Container>
        

        </div>

            
        </>
    )
}

export default RegisterPage
