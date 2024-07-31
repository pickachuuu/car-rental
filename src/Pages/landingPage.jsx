import React from 'react'
import Navbar from '../components/navBar'
import landingImage from '../assets/landing.png'

const landingPage = () => {

    const bgStyle = {
        backgroundImage: `url(${landingImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh'
    };

    return (
        <div style={bgStyle}>
            <Navbar/>
            <div className='container-fluid  d-flex flex-wrap align-items-center'>
                <div className='col-12'>
                        <div className='my-custom-h'>
                            Explore Lorem.
                            <br/>
                            Rent Your Ride Now.
                        </div>
                </div>
            </div>
        </div>        
    )
}

export default landingPage