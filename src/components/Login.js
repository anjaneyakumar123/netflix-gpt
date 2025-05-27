import React from 'react';
import Header from './Header';
import { useState } from 'react';

const Login = () => {
  
  const[showSigninForm, setShowSigninForm] = useState(false);
  
  const toggleSigninForm = () => {
    setShowSigninForm(!showSigninForm);
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/914ad279-199e-4095-9c10-2409dc9e5e1b/web/IN-en-20250519-TRIFECTA-perspective_8f1ca896-9e49-4a4e-90f0-22fc49650bd9_large.jpg"
          alt="Netflix background"
          className="background-image"
        />
      </div>
      <form className="w-3/12 p-12 my-40 mx-auto right-0 left-0 absolute flex flex-col justify-center bg-opacity-80 bg-black rounded-lg">
        <h1 className="text-4xl font-bold text-white mb-6 text-left">{ !showSigninForm ? "Sign In" : "Sign Up" }</h1>
        {showSigninForm && <input
          type="text"
          placeholder="Name"
          className="w-full p-3 mb-4 rounded text-white bg-gray-700"
        />}
        <input
          type="email"
          placeholder="Email or phone number"
          className="w-full p-3 mb-4 rounded text-white bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded text-white bg-gray-700"
        />
        <button className="w-full p-3 font-bold text-xl text-white bg-red-500 rounded hover:bg-red-700">
          { !showSigninForm ? "Sign In" : "Sign Up" }
        </button>
        <p className="mt-4 py-4 text-gray-400 text-sm"
           onClick={toggleSigninForm}
        >
          {showSigninForm ? "Already Registered!" : "New to Netflix?"} <span className="text-white font-bold cursor-pointer hover:underline ">{showSigninForm ? "Sign in now" : "Sign up now."}</span>
        </p>
      </form>
    </div>
  
  );
};

export default Login;