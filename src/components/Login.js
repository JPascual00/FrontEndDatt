import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Datt from './datt_icon.PNG';
import { useNavigate } from "react-router-dom";
import Mainform from './Mainform.js'

const Login = (props) => {
  const navigate = useNavigate();

  return (
    <div className="login">
      {/*  */}

      <img src={Datt} alt='i-tdsystem' className='loginicon'/>

      <Form>
        <Form.Group>
          <Form.Label className='emailaddlabel'>Email Address</Form.Label>
          <Form.Control type='email' placeholder='Please enter your email' className='loginfield'/>
        </Form.Group>

        <Form.Group>
          <Form.Label className='passwordlabel'>Password</Form.Label>
          <Form.Control type='password' placeholder='Please enter you password' className='loginfield'/>
        </Form.Group>
      </Form>

      <Button variant='secondary' className='loginbutton' onClick={() => navigate('/mainform')}>Login</Button>
      <Button variant='secondary' className='cancelbutton'>Cancel</Button>
    </div>
  );

}

export default Login;
