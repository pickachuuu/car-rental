import React, { useState } from 'react'


const Login = ({ toggleComponent }) => {

    const [cred, setCred] = useState({ username: '', password: ''})


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