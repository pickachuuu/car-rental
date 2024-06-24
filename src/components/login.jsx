import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../utils/authContext.jsx';
import axios from 'axios'

const Login = ({ toggleComponent }) => {

    // function hasCookie(cookieName) {
    //   const cookies = document.cookie.split(';');
    //   for (const cookie of cookies) {
    //     const [key, value] = cookie.trim().split('=');
    //     if (key === cookieName && value) {
    //       return true;
    //     }
    //   }
    //   return false;
    // }

  const navigate = useNavigate()
  const [cred, setCred] = useState({ username: '', password: ''})
  const {setIsAuthenticated, setUser} = useContext(AuthContext)


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

      console.log("hello")
      

      // Assuming successful login redirects or returns a success message
      if (response.status == 200){


        const token = response.token
        const someDaysFromNow = new Date(Date.now() + (7 * 24 * 60 * 60 * 1000)); // Example: 7 days from now
        document.cookie = `authToken=${token}; expires=${someDaysFromNow.toUTCString()}; Secure;`
        setIsAuthenticated(true);
        setUser(response.data.user); 
        
        // const hasJwtCookie = hasCookie('authToken');
        // console.log('JWT cookie found:', hasJwtCookie);

        if (response.data.role == "Admin")
          {
            navigate('/Dashboard')
          }else
          {
            // navigate('/Home')
          }
      }

    } catch (error) {
      if (error.response && error.response.status === 401) {
        // error //
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
            <form method='POST' className='needs-validation' noValidate>
              <div className='mb-3'>
                <label className='form-label' for="validationCustom01" >Email</label>
                <input type="email" className='form-control' id="email" name="username" onChange={hadleChanges} required/>
              </div>
              <div className='mb-3'>
                <label className='form-label'>Password</label>

                {/* <div className=''>
                  {passwordError && <span className="error">{passwordError}</span>}
                </div> */}

                <input type='password' className='form-control' id="password" name="password"  onChange={hadleChanges} required/>
                <div className='mt-2'>
                  <a className='text-custom' href='#'>Forgot your password?</a>
                </div>
              </div>
              <div>
                <button className='btn btn-dark btn-lg my-4 btn-block rounded-pill' type='submit' onClick={handleLogin}>
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