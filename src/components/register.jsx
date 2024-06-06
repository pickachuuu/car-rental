import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [regCred, setRegCred] = useState({email: '', password: '', firstName: '', lastName: '', birthDate: '', cPassword: ''});

  const handleformChanges = (event) => {
    const name = event.target.name
    const value = event.target.value
    setRegCred((prevCred) => {
      return {...prevCred, [name]: value}
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (regCred.password === regCred.cPassword != 0){
      await axios.post(`http://localhost:5000/api/register`, regCred)
    }else{
      console.log("Password doesnt match!")
    }
  }

  return (
    <div>
      <div className='container-fluid my-custom mb-5'>
        <div className="col-lg-7 p-4  mx-auto shadow rounded">
          <div>
            <a className='lead'>Get Started</a>
          </div>
          <div>
            <h1 className='d-none d-md-block'>Create your account</h1>
          </div>
          <div className='mt-4'>
            <form method='POST'>
              <div className='row'>
                <div className='col-6'>
                  <div className='mb-2'>
                    <label className='form-label'>First name</label>
                    <input type="text" className='form-control' name='firstName' onChange={handleformChanges}/>
                  </div>
                </div>
                <div className='col-6'>
                  <div className='mb-2'>
                    <label className='form-label'>Last name</label>
                    <input type='text' className='form-control' name='lastName' onChange={handleformChanges}/>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-6'>
                  <div className='mb-2'>
                    <label className='form-label'>Email</label>
                    <input type='email' className='form-control' name='email' onChange={handleformChanges}/>
                  </div>
                </div>
                <div className='col-6'>
                  <div className='mb-2'>
                    <label className='form-label'>birthdate</label>
                    <input type='date' className='form-control' name='birthDate' onChange={handleformChanges}/>
                  </div>
                </div>
              </div>
              <div className='mb-2'>
                <label className='form-label'>Password</label>
                <input type='password' className='form-control' name='password' onChange={handleformChanges}/>
              </div>
              <div className='mb-2'>
                <label className='form-label'>Confirm Password</label>
                <input type='password' className='form-control' name='cPassword' onChange={handleformChanges}/>
              </div>
              <div>
                <button className='btn btn-dark btn-lg my-3 btn-block rounded-pill' onClick={handleSubmit}>
                  Create Account
                </button>
                <hr></hr>
                <div className='text-center'>
                  <a>Already have an account? </a> 
                  <a className='text-custom' href=''>Login</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
