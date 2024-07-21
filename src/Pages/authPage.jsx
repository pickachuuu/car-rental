  import { useState } from 'react';
  import Login from '../components/login';
  import Register from '../components/register';
  import Logo from '../assets/Logo.png';

  function App() {
    const [activeComponent, setActiveComponent] = useState('login');

    
    const handleToggle = () => {
      setActiveComponent(activeComponent === 'login' ? 'register' : 'login');
    };

    return (
      <>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-12 col-lg-7 order-2 order-lg-1'>
              <div className='col-12 col-sm-4'>
                <a href='/'>
                  <img src={Logo} className='img' alt='Logo' />
                </a>
              </div>
              {activeComponent === 'login' ? (
                <Login toggleComponent={handleToggle} />
              ) : (
                <Register toggleComponent={handleToggle} setActiveComponent={setActiveComponent} />
              )}
            </div>
            <div className="col-lg-5 bg-banner order-1 order-lg-2">
            </div>
          </div>
        </div>
      </>
    );
  }

  export default App;
