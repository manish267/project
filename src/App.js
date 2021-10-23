import './App.css';
import Homepage from './components/HomePage/Homepage';
import NavbarTop from './components/Navbar/NavbarTop';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import ForgetPassword from './components/ForgetPassword/ForgetPassword';
import ResetPassword from './components/ResetPassword/ResetPassword';
import JobsPage from './components/JobsPage/JobsPage';
import PostJob from './components/PostJob/PostJob';

function App() {
  return (
    <>
    <Router>
    <NavbarTop />
    <Switch>
      <Route path="/" exact>
    <Homepage />
    </Route>
    <Route path="/login" exact>
    <LoginPage />
    </Route>
    <Route path="/register" exact>
      <RegisterPage />
    </Route>
    <Route path="/forget-password" exact>
    <ForgetPassword />
    </Route>
    <Route path="/resetpassword" exact>
    <ResetPassword />
    </Route>
    <Route path="/jobs" exact>
    <JobsPage />
    </Route>
    <Route path="/postjob" exact>
    <PostJob />
    </Route>
    </Switch>
    </Router>
    </>
  );
}

export default App;
