import React from 'react'

const login = () => {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-lg-6 col-10 mx-auto '>
                <div className='bg-custom p-1 my-custom'>
                    <h1 className='lead my- text-light text-center'>Sign in to your account</h1>
                </div>
                <div className='container-md mx-auto bg-dark p-3 '>
                    <form>
                        <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="inputEmail" placeholder="email@example.com"/>
                            </div>
                        </div>
                        <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                            </div>
                        </div>
                        <div className='col-6 mx-auto mt-5'>
                            <button type="button" className="btn btn-light">Submit</button>
                        </div>
                        <div className='col-12 text-center my-4'>
                            <a href='#'>dont have an account? register for free.</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default login