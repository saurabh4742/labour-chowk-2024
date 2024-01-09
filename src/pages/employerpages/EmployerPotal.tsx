import React, { useState } from "react";
import EmployerNavbar from "./EmployerNavbar";
import { Outlet } from "react-router-dom";
function EmployerPotal() {
  const user = null;
  return (
    <div>
      {user && <EmployerNavbar />}
      <Outlet />
    </div>
  );
}

export default EmployerPotal;
