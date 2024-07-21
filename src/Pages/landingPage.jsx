import React from 'react'
import Navbar from '../components/navBar'
import landingImage from '../assets/landing.png'

const landingPage = () => {

    const bgStyle = {
        backgroundImage: `url(${landingImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
    };

    return (
        <div style={bgStyle}>
            <Navbar/>
        </div>

        
    )
}

export default landingPage