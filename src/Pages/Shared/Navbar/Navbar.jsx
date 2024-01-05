import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../../../assets/images/no user logo.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    const navItems = 
    <>
    <li className="my-1">
        <NavLink to='/' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "font-bold text-orange-500 bg-gray-200" : "text-black"
        }>Home</NavLink>
    </li>
    <li  className="my-1">
        <NavLink to='/details' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "font-bold text-orange-500 bg-gray-200" : ""
        }>Details</NavLink>
    </li>
    <li  className="">
        <NavLink to='/category' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "font-bold text-orange-500 bg-gray-200" : ""
        }>Category</NavLink>
    </li>
    <li  className="">
        <NavLink to='/myFavourite' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "font-bold text-orange-500 bg-gray-200" : ""
        }>My Favourites</NavLink>
    </li>
    <li  className="">
        <NavLink to='/Profile' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "font-bold text-orange-500 bg-gray-200" : ""
        }>Profile</NavLink>
    </li>
    <li  className="">
        <NavLink to='/login' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "font-bold text-orange-500 bg-gray-200" : ""
        }>Log In/Sign Up</NavLink>
    </li>
    </>
  return (
    <div className="p-2 md:p-12">
      <div className="flex gap-4 ">
        <h1 className="font-bold text-3xl font-mitr ">pti.</h1>
        {/* search bar and dropdown */}
          <div className="flex md:mx-56 items-center">
          <div className="justify-center ">
            <form className=" md:w-[500px] relative">
              <div className="relative ">
                <input
                  type="search"
                  placeholder="      Search Audiobook"
                  className="w-full p-3 rounded-xl bg-white"
                  id=""
                />
                <button className="absolute top-1 left-0 p-3 ">
                  <FaSearch style={{ color: "orange" }} className="" />
                </button>
              </div>
            </form>
          </div>
          {/* Dropdown */}
            <details className="dropdown md:ms-2 ">
              <summary className="m-1 btn bg-white font-bold items-center justify-center">
                MENU{" "}
                <span className="md:ps-20">
                  {" "}
                  <IoIosArrowDown
                    style={{ color: "orange", width: "36px", height: "24px" }}
                  />
                </span>
              </summary>
              <ul className="p-2 menu dropdown-content z-[1] bg-white rounded-xl md:w-48">
                {navItems}
              </ul>
            </details>
          </div>
        <div className="avatar md:ms-28">
          <div className="w-12 h-12 rounded-full">
            <img src={logo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
