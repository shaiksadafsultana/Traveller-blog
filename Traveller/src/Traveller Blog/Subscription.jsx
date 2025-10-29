import React, {useState} from "react";
import Login from "./Login"
import { AiOutlineMail } from "react-icons/ai";

function Subscription() {
  const[isOpen,setIsOpen]= useState (false)
  return (
    <div>
      <section className="mx-30 my-4 py-12 mt-2 gap-10 mb-20 flex flex-row lg:flex-col items-center justify-between px-20 lg:px-30 bg-gradient-to-br from-white to-pink-200 shadow-lg rounded-3xl">
        {/* Left Side - Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl lg:text-3xl text-center leading-relaxed font-bold text-gray-600 mb-4">
            Subscribe to get information, latest news and other <br />
            interesting offers about
          </h2>
        </div>
        {/* Right Side - Subscription Form */}
        <div className="flex-1 flex justify-center items-center lg:justify-end">
          <form className="flex flex-col sm:flex-row gap-4">
            <div className="flex justify-center items-center">
              <div className="relative">
                <AiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10 pr-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400 w-full bg-white text-gray-700 placeholder-gray-400"
                />
              </div>
            </div>
            <button
              type="button"
             onClick={()=>setIsOpen(true)}
              className="px-6 py-3 bg-orange-400 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>        
        </div>
      </section>
        <Login show={isOpen} onClose={()=>setIsOpen(false)}/>
    </div>
  );
}

export default Subscription;
