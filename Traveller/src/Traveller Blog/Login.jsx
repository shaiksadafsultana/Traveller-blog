import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ show, onClose }) => {
  const [state, setState] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  if (!show) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/"); 
    onClose(); 
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setState("login"); 
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <form
        className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] text-gray-500 rounded-lg shadow-xl border border-gray-200 bg-white"
      >

        <div className="flex justify-between w-full items-center mb-2">
          <p className="text-2xl font-medium m-auto">
            <span className="text-indigo-500">User</span>{" "}
            {state === "login" ? "Login" : "Sign Up"}
          </p>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-500 hover:text-black text-lg"
          >
            ✕
          </button>
        </div>

        {/* Register Name Field */}
        {state === "register" && (
          <div className="w-full">
            <p>Name</p>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="type here"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500"
              type="text"
              required
            />
          </div>
        )}

        {/* Email Field */}
        <div className="w-full">
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="type here"
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500"
            type="email"
            required
          />
        </div>

        {/* Password Field */}
        <div className="w-full">
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="type here"
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500"
            type="password"
            required
          />
        </div>

        {/* Toggle between login/register */}
        {state === "register" ? (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setState("login")}
              className="text-indigo-500 cursor-pointer"
            >
              click here
            </span>
          </p>
        ) : (
          <p>
            Create an account?{" "}
            <span
              onClick={() => setState("register")}
              className="text-indigo-500 cursor-pointer"
            >
              click here
            </span>
          </p>
        )}

        {/* Buttons */}
        {state === "register" ? (
          <button
            type="button"
            onClick={handleRegister}
            className="bg-indigo-500 text-white w-full py-2 rounded-md hover:bg-indigo-600 transition-all"
          >
            Register
          </button>
        ) : (
          <button
            type="button" 
            onClick={handleLogin}
            className="bg-indigo-500 text-white w-full py-2 rounded-md hover:bg-indigo-600 transition-all"
          >
            Login
          </button>
        )}
      </form>
    </div>
  );
};

export default Login;
