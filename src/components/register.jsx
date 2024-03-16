import React, { useState } from 'react';
import axios from 'axios'
import Logo from '../assets/Logo.png';

const Register = () => {
  const [regCred, setRegCred] = useState({fname: '', lname: '', email: '', birthdate: '', password: ''});

  const handleformChanges = (event) => {
    const {name, value} = event.target
    setRegCred((recentRegCred) =>({
      ...recentRegCred, [name]: value,
    }))
  }

  const handleCreate = async (event) =>{
    event.preventDefault()
    const response = await axios.post('http://localhost:5000/api/register', regCred);
    console.log(response.message)
    if (response.status === 404){
      console.log("Sucess!");
    }else
    {
      console.error("Oh no!!");
    }
  }

  return (
    <div>
      <div className='container-fluid'>
        <div className="col-lg-11 my-custom  mx-auto shadow rounded">
          <div>
            <a className='lead'>Get Started</a>
          </div>
          <div>
            <h1 className='d-none d-md-block'>Create your account</h1>
          </div>
          <div className='mt-4'>
            <form className='custom-form'>
              <div className='row'>
                <div className='col-6'>
                  <div className='mb-2'>
                    <label className='form-label'>firstname</label>
                    <input type="text" className='form-control' name='fname' onChange={handleformChanges}/>
                  </div>
                </div>
                <div className='col-6'>
                  <div className='mb-2'>
                    <label className='form-label'>lastname</label>
                    <input type='text' className='form-control' name='lname' onChange={handleformChanges}/>
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
                    <input type='date' className='form-control' name='birthdate' onChange={handleformChanges}/>
                  </div>
                </div>
              </div>
              <div className='mb-2'>
                <label className='form-label'>Password</label>
                <input type='password' className='form-control' name='password' onChange={handleformChanges}/>
              </div>
              <div>
                <button className='btn btn-dark btn-lg my-4 btn-block rounded-pill' onClick={handleCreate}>
                  Create Account
                </button>
              </div>
              <hr></hr>
              <div className='text-center'>
                <a>Already have an account? </a> 
                <a className='text-custom' href=''>Login</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
