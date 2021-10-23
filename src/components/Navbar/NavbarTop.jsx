import React from "react";
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'
import './Navbar.css';
import { Link,useHistory } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import { loginActions } from "../../store/loginSlice";

const NavbarTop = () => {
  const dispatch=useDispatch();
  const history=useHistory();

  const loginUser=useSelector(state=>state.loginSlice.loginUser).toUpperCase()
  const loginStatus=useSelector(state=>state.loginSlice.loggedIn)

  const logoutHandler=()=>{
    dispatch(loginActions.setLoggedInStatus(false))
    dispatch(loginActions.setLoginUser({userName:''}))
    history.push('/')
  }

  return (
    <div style={{'backgroundColor':"#1A253C"}}>
    <Container style={{'backgroundColor':"#1A253C", 'borderBottom':'1px solid #43AFFF33'}}>
      <Navbar  expand="lg">
        <Container fluid>
        <Link style={{textDecoration:'none',cursor:'pointer'}} to="/">
          <Navbar.Brand className='text-white'>My <span>Jobs</span> </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
            </Nav>

    {loginStatus && <>
    <Link style={{textDecoration:'none',color:'#fff'}} to='/postjob'>
            <Nav.Item style={{textDecoration:'none'}}>
        <Nav  title="Item">
          Post a Job
        </Nav>
      </Nav.Item>
      </Link>

            <NavDropdown  style={{textDecoration:'none',color:'#fff'}} title={loginUser} id="nav-dropdown">
        <NavDropdown.Item   onClick={logoutHandler} >Logout</NavDropdown.Item>
      </NavDropdown>
      </>
    }
    {!loginStatus && <>

            <Link style={{textDecoration:'none',cursor:'pointer',margin:'5px'}} to="/login">
          <Navbar.Brand className='text-white bordered'>Login/Signup</Navbar.Brand>
          </Link>
          </>
    }

            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
    </div>
  );
};

export default NavbarTop;
