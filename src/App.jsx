import { useState } from 'react'
import Login from './components/login'
import Register from './components/register'
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Register/>
        {/* <Login/> */}
      </div>
    </>
  )
}

export default App
