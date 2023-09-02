import React from "react";
import {  signOut } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const Navigate = useNavigate();
  const user = useSelector((store) =>store.user)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        Navigate("/")
      })
      .catch((error) => {
        // An error happened.e
        Navigate("/error")
      });
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img
        className="w-40"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
      />
  {  user &&  <div className="flex p-2">
        <img
          className="w-12 h-12 "
          src="https://occ-0-5005-64.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABVdopoc4DhJ9M4hert4MN_F1EbR5f7rDgDjhPSqx0nRvGQvcD9zL1In0fwJumR96g-0ir2WORbrmQZ6OkfyCZtQryMVbqUWwKw.png?r=e6e"
          alt="UserIcon"
        />
        <button onClick={handleSignOut} className="font-bold text-white ">
          (Sign Out)
        </button>
      </div>}
    </div>
  );
};

export default Header;
