  import { useContext } from 'react';
  import { Outlet, Navigate } from 'react-router-dom';
  import { AuthTokenContext } from './authTokenContext';
  import axios from 'axios'

  // get or check for existing token and verify //

  const privateRoutes = () => {
    const {token, setToken} = useContext(AuthTokenContext)

   // Check for token and redirect if not authenticated
    try{
      if (!token){
        return <Navigate to="/" replace />;
      }

      const response = axios.post('http://localhost:5000/api/verifyToken', {
        token
      })

      if (response){

      }
      
    }catch(error){

    }
  };

  export default privateRoutes;



  // if (!token) {
  //   return <Navigate to="/" replace />; // Redirect to login on unauthorized access
  // }

  // const response = axios.post('http://localhost:5000/api/verifyToken', {
  //   token
  // });


  // // If token exists, render the child routes (Outlet)
  // return <Outlet />;