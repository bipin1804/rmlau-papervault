import { assert } from "../assets/assert";
import { NavLink } from "react-router-dom";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import apiclient from '../api/api.js'


import { useContext } from "react"
import { useState } from "react";
import { Appcontext } from "../context/context.jsx";






export default function Navbar(){

  const navigate= useNavigate();

const [icon,seticon]=useState(false);
const [background,setbackground]=useState(true)

const {auth,setAuth} = useContext(Appcontext)




const handleLogout = async () => {
  try {
     const res= await apiclient.post("/auth/logout", {}, {
      withCredentials: true
    });
    setAuth(false);


    console.log(res.data.message);
    navigate("/");

  } catch (error) {
    console.log(error);
  }
};



    return (
<nav className="flex md:justify-evenly py-2 px-4 bg-gray-200 justify-between">
<div className="flex items-center gap-3">
<div>
    <img src={assert.Rmlauicon} alt=""  className="h-8 mix-blend-multiply"/></div>
<div>
    <p className="font-medium ">Paper <span className="text-cyan-700">Vault</span></p>
    <p className="text-gray-500 text-sm md:text-sm">Rmlau Paper</p>
</div>
</div>

    <ul className="hidden md:flex gap-7 items-center justify-center">

      <NavLink to="/"
        className={({ isActive }) =>
          isActive ? "text-blue-600 font-bold underline" : "text-gray-700"
        }>
        <li className="font-bold">Home</li>
      </NavLink>

      <NavLink to="/year"
        className={({ isActive }) =>
          isActive ? "text-blue-600 font-bold underline" : "text-gray-700"
        }>
        <li className="font-bold">Browse Paper</li>
      </NavLink>


      <NavLink to="/About"
        className={({ isActive }) =>
          isActive ? "text-blue-600 font-bold underline" : "text-gray-700"
        }>
        <li className="font-bold">About Us</li>
      </NavLink>

    </ul>






<div className="flex items-center gap-5">








<div className="flex items-center gap-5">

{auth ? (
  <button
    className="py-2 px-3 bg-gray-600 text-white rounded-full
               flex items-center justify-center gap-2"
    onClick={handleLogout}
  >
    <ManageAccountsIcon />
    Logout
  </button>
) : (
  <button
    className="py-2 px-3 bg-gray-600 text-white rounded-full
               flex items-center justify-center gap-2"
    onClick={() => navigate("/signup")}
  >
    <ManageAccountsIcon />
    Account
  </button>
)}
</div>






</div>





<div className="relative flex items-center justify-center md:hidden">
  <MenuIcon
    onClick={() => seticon(!icon)}
    className="cursor-pointer"
  />

  {icon && (
    <ul className="absolute top-14 right-0 z-50 flex flex-col gap-5 w-48 bg-white shadow-lg rounded-lg p-5">

      <NavLink to="/"
        className={({ isActive }) =>
          isActive ? "text-blue-600 font-bold" : "text-gray-700"
        }>
        <li>Home</li>
      </NavLink>

      <NavLink to="/paper"
        className={({ isActive }) =>
          isActive ? "text-blue-600 font-bold" : "text-gray-700"
        }>
        <li>Browse Paper</li>
      </NavLink>


      <NavLink to="/about"
        className={({ isActive }) =>
          isActive ? "text-blue-600 font-bold" : "text-gray-700"
        }>
        <li>About Us</li>
      </NavLink>



    </ul>
  )}
</div>

</nav>

        
    )
}