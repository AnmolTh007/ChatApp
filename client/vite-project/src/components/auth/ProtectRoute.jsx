import { Home } from '@mui/icons-material';
import React from 'react'

const ProtectRoute = ({children, user,redirect="/login"}) => {
  if(!user) return <Navigate to={redirect} />;
  return children
}

export default ProtectRoute

<ProtectRoute user = {false}>
    Home