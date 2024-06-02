import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Login = ({ toggleComponent }) => {

  const [cred, setCred] = useState({ username: '', password: ''})
  const [data, setData] = useState([])

  const hadleChanges = (event) => {
    const name = event.target.name
    const value = event.target.value
    setCred((prev) => 
      {
        return {...prev, [name]: value}
      })
  }

  const handleLogin = (event) => {
    axios.post(`http://localhost:5000/api/login`)
  }


  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const { data } = await axios.get(`http://localhost:5000/api/users`);
  //       setData(data);
  //       console.log('data after set:', data);
  //     } catch (error) {
  //       console.error('Error fetching users:', error);
  //       // Consider displaying a user-friendly error message here
  //     }
  //   };
  
  //   fetchUsers();
  // }, []);

  

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