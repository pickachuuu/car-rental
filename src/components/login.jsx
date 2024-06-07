import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Error from './errorPopUp.jsx'
import axios from 'axios'

const Login = ({ toggleComponent }) => {
  const navigate = useNavigate();
  const [cred, setCred] = useState({ username: '', password: ''})

  const hadleChanges = (event) => {
    const name = event.target.name
    const value = event.target.value
    setCred((prev) => 
      {
        return {...prev, [name]: value}
      })
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5000/api/login`, {
        email: cred.username,
        password: cred.password
      });
      // Assuming successful login redirects or returns a success message
      if (response.status == 200){

        if (response.data.role == "Admin")
          {
            navigate('/Dashboard')
          }else
          {
            navigate('/Home')
          }
      }else if (response.status == 401){
        navigate('/')
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.error("User not found");
        // Display error message or handle the case where the user is not found
      } else {
        console.error(error.message);
        // Handle other errors
      }
    }
  };
  
  return (
    <div>
      <div className='container-fluid my-custom mb-5'>
        <div className="col-lg-7 p-4 mx-auto shadow rounded">
          <div>
            <a className='lead'>welcome back</a>
          </div>
          <div>
            <h1 className='d-none d-md-block'>Login to your account</h1>
          </div>
          <div className='mt-4'>
            <form method='POST'>
              <div className='mb-3'>
                <label className='form-label'>Email</label>
                <input type="email" className='form-control' id="email" name="username" onChange={hadleChanges}/>
              </div>
              <div className='mb-3'>
                <label className='form-label'>Password</label>
                <input type='password' className='form-control' id="password" name="password"  onChange={hadleChanges}/>
                <div className='mt-2'>
                  <a className='text-custom' href='#'>Forgot your password?</a>
                </div>
              </div>
              <div>
                <button className='btn btn-dark btn-lg my-4 btn-block rounded-pill' onClick={handleLogin}>
                  Login
                </button>
              </div>
              <hr />
              <div className='text-center'>
                <a>Dont have an account? </a>
                <a className='text-custom' href='#' onClick={toggleComponent}>Get Started</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;