import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useContext } from "react";
import { Appcontext } from "../context/context.jsx";

export default function ProtectRoute() {
  const  {auth}  = useContext(Appcontext);
  const location = useLocation();

  console.log("ProtectRoute running:", auth);

  if (!auth) {
    return (
      <Navigate
        to="/signup"
        state={{ from: location }}
        replace
      />
    );
  }
  return <Outlet />;
}




