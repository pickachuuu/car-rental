import { Outlet, Navigate } from 'react-router-dom';

// get or check for existing token and verify //

const publicRoutes = () => {
  let auth = {'token': true}
  return (
    auth.token ? <Outlet/> : <Navigate to ="/"/>
  );
};

export default publicRoutes;