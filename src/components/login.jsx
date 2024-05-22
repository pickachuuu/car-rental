import React, { useState } from 'react'
import axios from 'axios'

const Login = ({ toggleComponent }) => {

    const [cred, setCred] = useState({ username: '', password: ''})


    const handleInput = (event) =>{
        const { name, value } = event.target
        setCred((recentCred) => ({ 
            ...recentCred, [name]: value,
        }))
    };

    const handleSubmit = async (event) =>{
        event.preventDefault();
        const response  = await axios.post('http://localhost:5000/api/login', cred);
        try {
            if (response.status === 200){
                console.log("Login sucessfully")
            }else if (response === 401)
            {
              console.log("Login failed")
            }else{
              console.log("Internal server Error!")
            }
        }catch(error){
            console.log("Error", error)
        }
    }

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
            <form>
              <div className='mb-3'>
                <label className='form-label'>Email</label>
                <input type="email" className='form-control' id="email" name="username" onChange={handleInput} />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Password</label>
                <input type='password' className='form-control' id="password" name="password" onChange={handleInput} />
                <div className='mt-2'>
                  <a className='text-custom' href='#'>Forgot your password?</a>
                </div>
              </div>
              <div>
                <button className='btn btn-dark btn-lg my-4 btn-block rounded-pill' onClick={handleSubmit}>
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


//   const handleInput = (event) => {
//     const { name, value } = event.target;
//     setCred((prevCredentials) => ({
//       ...prevCredentials,
//       [name]: value,
//     }));
//   };


//   const handleSubmit = async (event) =>{
//     event.preventDefault();

//     try{
//         const response = await axios.post('http://localhost:5000/api/login', cred);
//         if (response.status === 200) {
//             console.log('Login successful');
//             // You can perform actions like redirecting to another page or updating state here
//         } else {
//             console.log('Login failed');
//         }
//     } catch (error)
//     {
//         console.error('Login failed:', error);
//     }
//   };