import React,{useState} from 'react'
import { Container,Form,Button } from 'react-bootstrap';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';
import { loginActions } from '../../store/loginSlice';
import { useDispatch } from 'react-redux';

const BASE_URL="https://jobs-api.squareboat.info/api/v1"

const LoginPage = () => {

   const dispatch = useDispatch();
  const history=useHistory();

  const [email, setEmail] = useState('')
  const [emailValid,setEmailValid]=useState(true);
  const [password, setPassword] = useState('')
  const [passwordValid,setPasswordValid]=useState(true);
  const [loginValid, setLoginValid] = useState(true)

  const loginHandler=(e)=>{
    e.preventDefault();

    email !=='' || email.includes('@') ? setEmailValid(true) :setEmailValid(false)
   password !=='' || password.length >3 ? setPasswordValid(true) :setPasswordValid(false)

    if(emailValid && passwordValid){
      let data={
        email:email,
        password:password
      }
     async function login(){

        const res=await axios.post(`${BASE_URL}/auth/login`,data)
        // console.log(res.data.data.token)
        if(!res){
          setLoginValid(false)
        }
        if(res.data.code===200){
          dispatch(loginActions.setLoggedInStatus(true))
          dispatch(loginActions.setLoginUser({userName:res.data.data.name}));
          dispatch(loginActions.setToken(res.data.data.token));
          
          history.push('/jobs')
        }
      }
      login()

    }


  }

    return (
        <>
        <div style={{'backgroundColor':"#1A253C",height:"200px"}}>
        <Container style={{display:'flex',justifyContent:"center",alignItems:'center',padding:"100px 100px 0px 100px"}}>
        <div className="form-responsive"  style={{width:"40vw",backgroundColor:"#fff",padding:"40px",borderRadius:"20px"}}>
        <h3>Login</h3>
        <Form onSubmit={loginHandler}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
    {!emailValid && <Form.Text style={{color:'red'}} className="text">
      The Field is required.
    </Form.Text>}
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
  <Link to="/forget-password" style={{float:'right',textDecoration:"none"}} >Forgot Your  Password?</Link>
    <Form.Control  value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
    {!passwordValid && <Form.Text style={{color:'red'}} className="text">
      The Field is required.
    </Form.Text>}
    {!loginValid && <Form.Text style={{color:'red'}} className="text">
      Email or Password is incorrect
    </Form.Text>}
  </Form.Group>
      <div className="text-center">
  <Button variant="primary" className="p-2 mb-4"  type="submit">
    Login
  </Button>
      <h6>New to MyJobs?<Link to="/register" style={{textDecoration:"none"}}> Create an account</Link></h6>
    </div>
</Form>
</div>

        </Container>
        

        </div>

            
        </>
    )
}

export default LoginPage
