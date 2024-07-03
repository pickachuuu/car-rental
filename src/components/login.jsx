import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../utils/authContext.jsx';
import { useForm } from 'react-hook-form';
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
  const {setIsAuthenticated, setUser} = useContext(AuthContext)
  const { register, handleSubmit, formState: {errors}, setError } = useForm();

  const handleLogin = async (data) => {
    const { email, password } = data; // Destructuring to extract email and password
    console.log(`Email: ${email}, Password: ${password}`);
    try {
      const response = await axios.post(`http://localhost:5000/api/login`, {
        email: data.email,
        password: data.password
      });

      // Assuming successful login redirects or returns a success message
      if (response.status == 200){
        const token = response.token
        const someDaysFromNow = new Date(Date.now() + (7 * 24 * 60 * 60 * 1000)); // Example: 7 days from now
        document.cookie = `authToken=${token}; expires=${someDaysFromNow.toUTCString()}; Secure;`
        setIsAuthenticated(true);

        if (response.data.role == "Admin")
          {
            navigate('/Dashboard')
          }else
          {
            navigate('/Home')
          }
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // error //
        setError("root", {
          message: "Invalid email or password"
        })
      } else {
        // Handle other errors
        setError("root", {
          message: "Internal server error, please try again later"
        })
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

            
            <form method='POST' onSubmit={handleSubmit(handleLogin)}>
              <div className='mb-3'>
                <label className='form-label' >Email</label>
                <input {...register("email", {
                  required: "Email is required",
                  validate: (value) => {
                    if (!value.includes('@')){
                      return false
                    }
                    return true
                  }
                })} type="email" className='form-control' id="username"/>
                {errors.email && <div className='text-red-500'>{errors.email.message}</div>}
              </div>
              <div className='mb-3'>
                <label className='form-label'>Password</label>
                <input {...register("password", {
                  required: "Password is required"
                })} type='password' className='form-control' id="password"/>
                {errors.password && <div className='text-red-500'>{errors.password.message}</div>}
                <div className='mt-2'>
                  <a className='text-custom' href='#'>Forgot your password?</a>
                </div>
              </div>
              <div>
                <button className='btn btn-dark btn-lg my-4 btn-block rounded-pill' type='submit'>
                  Login
                </button>
                {errors.root && <div className='text-red-500 text-center'>{errors.root.message}</div>}
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