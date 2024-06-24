import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Register = ({ toggleComponent }) => {


  const { register, handleSubmit, formState: {errors} } = useForm();


  const onSubmit = async (data) => {
    if (regCred.password === regCred.cPassword != 0){
      try{
        const response = await axios.post(`http://localhost:5000/api/register`, data)
        if (response.status == 200){
          // placeholder //
        }
      }catch(error){
        // placeholder //
      }
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
            <form method='POST' className='needs-validation' onSubmit={handleSubmit}>
              <div className='form-row'>
                <div className='col-6'>
                  <div className='mb-2'>
                    <label className='form-label'  >First name</label>
                    <input type="text" className='form-control' name='firstName' id='validationCustom02'/>
                  </div>
                </div>
                <div className='col-6'>
                  <div className='mb-2'>
                    <label className='form-label'>Last name</label>
                    <input type='text' className='form-control' name='lastName'/>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-6'>
                  <div className='mb-2'>
                    <label className='form-label'>Email</label>
                    <input type='email' className='form-control' name='email'/>
                  </div>
                </div>
                <div className='col-6'>
                  <div className='mb-2'>
                    <label className='form-label'>birthdate</label>
                    <input type='date' className='form-control' name='birthDate'/>
                  </div>
                </div>
              </div>
              <div className='mb-2'>
                <label className='form-label'>Password</label>
                <input type='password' className='form-control' name='password'/>
              </div>
              <div className='mb-2'>
                <label className='form-label'>Confirm Password</label>
                <input type='password' className='form-control' name='cPassword'/>
              </div>
              <div>
                <button className='btn btn-dark btn-lg my-3 btn-block rounded-pill' type='submit'>
                  Create Account
                </button>
                <hr></hr>
                <div className='text-center'>
                  <a>Already have an account? </a> 
                  <a className='text-custom' href='#' onClick={toggleComponent}>Login</a>
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
