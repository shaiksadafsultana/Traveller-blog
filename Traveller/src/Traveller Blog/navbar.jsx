import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login"


function Navbar() {
  const navigate=useNavigate()
  const[isOpen,setIsOpen]=useState(false)

  return (
    <div>
    <nav className="bg-white shadow-sm fixed top-0 z-50 w-full ">
      <div className="max-w-7xl mx-auto px-2 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-3xl font-bold text-black" onClick={()=>{navigate('/')}}>
          Jad<span className="text-yellow-500">oo</span>
        </div>
        <div  className="flex items-center gap-20">
        <ul className="hidden md:flex items-center gap-20 text-gray-700 font-medium">
          <li>
                <p className="cursor-pointer hover:text-yellow-600" onClick={()=>navigate('/destination')}>
                  Destinations
                </p>
              </li>
          <li className="cursor-pointer hover:text-yellow-600" onClick={()=>navigate('/hotel')}>Hotels</li>
          <li className="cursor-pointer hover:text-yellow-600" onClick={()=>navigate('/flights')}>Flights</li>
          <li>      
            <p className="cursor-pointer hover:text-yellow-600" onClick={()=>navigate ('/Booking')}> 
              Bookings
              </p>
              </li>
        </ul>

         <div className="hidden md:flex items-center gap-15">
          <button className="border border-gray-700 rounded-md px-3 py-1 hover:bg-yellow-500 hover:text-white transition" 
          onClick={()=>setIsOpen(true)}
          >Login</button>
          
          <select className=" px-2 py-1">
            <option>EN</option>
            <option>ES</option>
            <option>FR</option>
          </select>
          </div>
        </div>
      </div>
    </nav>
    <Login show={isOpen} onClose={()=>setIsOpen(false)}/>
    </div>
  );
}

export default Navbar;
