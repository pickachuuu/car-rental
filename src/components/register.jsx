import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Register = ({ toggleComponent, setActiveComponent }) => {
  const { register, handleSubmit, formState: {errors}, setError } = useForm();
  const onSubmit = async (data) => {
    console.log(data)
    if (data.password !== data.cPassword){
      setError("cPassword", {
        message: "Passwords doesnt match"
      })
      return
    }
    console.log(data)
      try{
        const response = await axios.post(`http://localhost:5000/api/register`, data)
        console.log(response)
        if (response.status === 201){
          setActiveComponent('login')
        }
      }catch(error){
        console.error(error)
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
            <form method='POST' className='needs-validation' onSubmit={handleSubmit(onSubmit)}>
              <div className='row'>
                <div className='col-6'>
                  <div className='mb-2'>
                    <label className='form-label'>First name</label>
                    <input {...register("firstName", {
                      required: "Input field required",
                      })} type="text" className='form-control' name='firstName'/>
                      {errors.firstName && <div className='text-red-500'>{errors.firstName.message}</div>}
                  </div>
                </div>
                <div className='col-6'>
                  <div className='mb-2'>
                    <label className='form-label'>Last name</label>
                    <input {...register("lastName", {
                      required: "Input field required",
                      })}type='text' className='form-control' name='lastName'/>
                      {errors.lastName && <div className='text-red-500'>{errors.lastName.message}</div>}
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-6'>
                  <div className='mb-2'>
                    <label className='form-label'>Email</label>
                    <input {...register("email", {
                      required: "Email is required",
                      validate: (value) => {
                        if (!value.includes('@')){
                          return false
                        }
                        return true
                      }
                    })} type='email' className='form-control' name='email'/>
                    {errors.email && <div className='text-red-500'>{errors.email.message}</div>}
                  </div>
                </div>
                <div className='col-6'>
                  <div className='mb-2'>
                    <label className='form-label'>birthdate</label>
                    <input {...register("birthDate", {
                      valueAsDate: true,
                      required: "Date of birth required"
                    }) } type='date' className='form-control' name='birthDate'/>
                    {errors.birthDate && <div className='text-red-500'>{errors.birthDate.message}</div>}
                  </div>
                </div>
              </div>
              <div className='mb-2'>
                <label className='form-label'>Password</label>
                <input {...register("password", {
                  required: "Password required",
                  minLength: {
                    value: 8,
                    message: "Password must be longer than 8 characters"
                  },
                  pattern: {
                    value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[~!@#$%^&*])/,
                    message: "Needs 1 uppercase & 1 special char"
                  }
                })} type='password' className='form-control' name='password'/>
                {errors.password && <div className='text-red-500'>{errors.password.message}</div>}
              </div>
              <div className='mb-2'>
                <label className='form-label'>Confirm Password</label>
                <input {...register("cPassword", {
                  required: "Confirm your password"
                })} type='password' className='form-control' name='cPassword'/>
                {errors.cPassword && <div className='text-red-500'>{errors.cPassword.message}</div>}
              </div>
              <div>
                <button className='btn btn-dark btn-lg my-3 btn-block rounded-pill' type='submit'>
                  Create Account
                </button>
                {errors.root && <div className='text-red-500'>{errors.root.message}</div>}
                <hr/>

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
