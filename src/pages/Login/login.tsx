import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo';
import Left_Image from '../../assets/images/left_image_login1.svg'
import './login.scss';

const Login = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState<boolean>(false);
    const handleClick = () => {
      navigate("/dashboard");
    }

  return (
    <div className="page-content">
      <div className='left-view'>
        <Logo/>
        <img src={Left_Image} alt="left login"/>
      </div>
      <div className='right-view'>
        <form>
            <div className="mb-5">
                <h2>Welcome!</h2>
                <p>Enter details to login</p>
            </div>
            

            <div className="mb-4">
                <input type="text" placeholder="Email" className="form-control"/>
            </div>    
  
            <div className="pass-input mt-2 mb-3">
                <input type={show ? "text" : "password"} placeholder="password" className="form-control"/>
                {show ? (
                    <span onClick={() => setShow(false)}>Hide</span>
                ) : (
                    <span onClick={() => setShow(true)}>Show</span>
                )}    
            </div>
            <a href="/forget-password" >
                forget password?
            </a>   
            <button type="button" onClick={handleClick}>LOG IN</button>   
        </form>
      </div>
    </div>
  )
}

export default Login

