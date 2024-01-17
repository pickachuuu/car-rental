import React from 'react'

const login = () => {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className="col-lg-5 bg-banner">
            </div>
            <div className='col-7 col-12-sm'>
                <div className='container-fluid'>
                    <div className="col-7 my-custom mx-auto">
                        <div>
                            <a className='lead'>welcome back</a>
                        </div>
                        <div>
                            <h1 className='display-4 d-none d-md-block'>Login to your account</h1>
                        </div>
                        <div className='mt-5'>
                            <form>
                                <div className='mb-3'>
                                    <label className='form-label'>Email</label>
                                    <input type="email" className='form-control' id="email"/>
                                </div>
                                <div className='mb-3'>
                                    <label className='form-label'>password</label>
                                    <input type='password' className='form-control id="password'></input>
                                </div>
                                <button className='btn-primary btn-lg mt-4'>
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default login