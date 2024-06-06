import { useEffect, useState } from 'react'
import axios from 'axios';
import Login from './components/login'
import Register from './components/register'
import Navbar from './components/navBar';
import Landing from './Pages/landingPage';
import './App.css';

function App() {
  const [RenderedPage, setRenderedPage] = useState(true)
  

  const toggleComponent =  () => {
    setRenderedPage(!RenderedPage)
  };

  return (
    <>
    
    <Landing/>
    {/* <Navbar/> */}

    {/* <div className='container-fluid'>
    <div className='row'>

      <div className='col-12 col-lg-7 order-2 order-lg-1'>
        {RenderedPage ? <Login toggleComponent={toggleComponent} />: <Register/>}
      </div>
      <div className="col-lg-5 bg-banner order-1 order-lg-2">
      </div>

    </div>
    </div> */}
    </>
  )
}

export default App
