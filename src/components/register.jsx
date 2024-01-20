import React from 'react';
import Logo from '../assets/Logo.png';

const Register = () => {
  return (
    <div>
      <div className='col-12 mb-5'>
        <img src={Logo} className='img' alt='Logo' />
      </div>
      <div className='container-fluid'>
        <div className="col-lg-11 p-4 my-custom mb-5 mx-auto shadow rounded">
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
                  <div className='mb-3'>
                    <label className='form-label'>firstname</label>
                    <input type="text" className='form-control' id="fname" />
                  </div>
                </div>
                <div className='col-6'>
                  <div className='mb-3'>
                    <label className='form-label'>lastname</label>
                    <input type='text' className='form-control' id='lname'></input>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-6'>
                  <div className='mb-3'>
                    <label className='form-label'>Email</label>
                    <input type='email' className='form-control' id='email'></input>
                  </div>
                </div>
                <div className='col-6'>
                  <div className='mb-3'>
                    <label className='form-label'>birthdate</label>
                    <input type='date' className='form-control' id='birthdate'></input>
                  </div>
                </div>
              </div>
              <div className='mb-3'>
                <label className='form-label'>Password</label>
                <input type='password' className='form-control' id='password'></input>
              </div>
              <div>
                <button className='btn btn-dark btn-lg my-4 btn-block rounded-pill'>
                  Create Account
                </button>
              </div>
              <hr></hr>
              <div className='text-center'>
                <a>Already have an account?</a> 
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
