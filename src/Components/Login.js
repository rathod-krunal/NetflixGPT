import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm)
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Logo"
        />
      </div>
      <form className="absolute w-4/12 h-3/5  rounded-lg p-12 bg-black  bg-opacity-80 my-36 mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-3xl py-4"> {isSignInForm ? "Sign in" : "Sign up"} </h1>
        {  !isSignInForm && ( <input
          type="text"
          placeholder="Full Name"
          className="py-2 m-2 w-full bg-gray-700"
        />)}
        <input
          type="text"
          placeholder="Email Address"
          className="py-2 m-2 w-full bg-gray-700 "
        />
        <input
          type="password"
          placeholder="Password"
          className="py-2 m-2 w-full bg-gray-700"
        />
        <button className="p-4 m-2 bg-red-600 w-full"> {isSignInForm ? "Sign in" : "Sign up"}  </button>
        <p className="py-4 cursor-pointer " onClick={toggleForm}>
       {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now" }
        </p>
      </form>
    </div>
  );
};

export default Login;
