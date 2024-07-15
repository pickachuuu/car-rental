  import { useContext } from 'react';
  import { Outlet, Navigate } from 'react-router-dom';
  import { AuthTokenContext } from './authTokenContext';

  // get or check for existing token and verify //

  const privateRoutes = () => {
    const {token, setToken} = useContext(AuthTokenContext)

   // Check for token and redirect if not authenticated
    if (!token) {
      return <Navigate to="/" replace />; // Redirect to login on unauthorized access
    }

    // If token exists, render the child routes (Outlet)
    return <Outlet />;
  };

  export default privateRoutes;