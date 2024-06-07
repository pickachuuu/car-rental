import React, { useEffect, useState } from 'react'
import { Outlet, Navigate } from 'react-router-dom';

const privateRoutes = () => {
  let auth = {'token': true}
  return (
    auth.token ? <Outlet/> : <Navigate to ="/"/>
  );
};

export default privateRoutes;