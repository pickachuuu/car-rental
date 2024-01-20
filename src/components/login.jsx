import React from 'react'
import Logo from '../assets/Logo.png'

const login = ({toggleComponent}) => {
  return (
    <div>
                <div className='col-12 mb-5'>
                    <img src={Logo} className='img' alt='Logo'/>
                </div>
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
                                    <input type="email" className='form-control' id="email"/>
                                </div>
                                <div className='mb-3'>
                                    <label className='form-label'>password</label>
                                    <input type='password' className='form-control id="password'></input>
                                    <div className='mt-2'>
                                        <a className='text-custom' href='#'>forgot your password?</a>
                                    </div>
                                </div>
                                <div>
                                    <button className='btn btn-dark btn-lg my-4 btn-block rounded-pill'>
                                        Login
                                    </button>
                                </div>
                                <hr></hr>
                                <div className='text-center'>
                                    <a>Dont have an account? <a className='text-custom' href='#' onClick={toggleComponent}>Get Started</a></a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default login