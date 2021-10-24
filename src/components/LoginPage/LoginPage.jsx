import React,{useState} from 'react'
import { Container,Form,Button } from 'react-bootstrap';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';
import { loginActions } from '../../store/loginSlice';
import { useDispatch,useSelector } from 'react-redux';
import './LoginPage.css'

const BASE_URL="https://jobs-api.squareboat.info/api/v1"

const LoginPage = () => {

  const loginStatus=useSelector(state=>state.loginSlice.loggedIn)


   const dispatch = useDispatch();
  const history=useHistory();

  if(loginStatus){
    history.push('/jobs')
  }

  const [email, setEmail] = useState('')
  // const [emailValid,setEmailValid]=useState(true);
  const [password, setPassword] = useState('')
  // const [passwordValid,setPasswordValid]=useState(true);
  // const [loginValid, setLoginValid] = useState(true)
  const [errorMsg, setErrorMsg] = useState('')

  const loginHandler=(e)=>{
    e.preventDefault();

  //   email.length >4 ? setEmailValid(true) : setEmailValid(false)
  //  password.length>4 ? setPasswordValid(true) : setPasswordValid(false);
  //  console.log(emailValid)
  //  console.log(passwordValid)

    // if(!emailValid) return;
      
      let data={
        email:email,
        password:password
      }
     async function login(){
       try{
         
         const res=await axios.post(`${BASE_URL}/auth/login`,data)
         // console.log(res.data.data.token)
        //  if(!res){
        //    setLoginValid(false)
        //  }
         if(res.data){
           dispatch(loginActions.setLoggedInStatus(true))
           dispatch(loginActions.setLoginUser({userName:res.data.data.name}));
           dispatch(loginActions.setToken(res.data.data.token));
           
           history.push('/jobs')
         }
       }catch(e){
        //  setEmailValid(true);
        //  setPasswordValid(true)
        setErrorMsg('Email or Password is Wrong')
       }

      }
      login()

    


  }

    return (
        <>
        <div className="form-group" style={{'backgroundColor':"#1A253C",height:"200px"}}>
        <Container style={{display:'flex',justifyContent:"center",alignItems:'center',padding:"100px 100px 0px 100px"}}>
        <div className="form-responsive"  style={{backgroundColor:"#fff",padding:"40px",borderRadius:"20px"}}>
        <h3>Login</h3>
        <Form onSubmit={loginHandler}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" required/>
    {/* {!emailValid && <Form.Text style={{color:'red'}} className="text">
      The Field is required.
    </Form.Text>} */}
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
  <Link to="/forget-password" style={{float:'right',textDecoration:"none"}} >Forgot Your  Password?</Link>
    <Form.Control  value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" required/>
    {/* {!passwordValid && <Form.Text style={{color:'red'}} className="text">
      The Field is required.
    </Form.Text>} */}
    {errorMsg.length >3 && <Form.Text style={{color:'red'}} className="text">
      {errorMsg}
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
