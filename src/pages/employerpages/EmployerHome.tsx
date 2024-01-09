import React from 'react'
import { Navigate } from 'react-router-dom';
function EmployerHome() {
  const user=null
  return (
    <div>
     {!user &&  <Navigate to="/employer/login" />}
    </div>
  )
}

export default EmployerHome