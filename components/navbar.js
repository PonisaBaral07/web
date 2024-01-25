"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Logo from "./logo";
import { IoIosCloseCircle, IoIosMenu } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };


  return (
    <>
      <div className="shadow-md p-8 h-full flex items-center justify-center md:justify-start  sticky">
      <IoIosMenu className={`absolute left-2 text-3xl md:hidden ${isMenuOpen ? 'hidden' : ''}`} onClick={toggleMenu} />
        <IoIosCloseCircle className={`absolute left-2 text-3xl md:hidden ${isMenuOpen ? '' : 'hidden'}`} onClick={toggleMenu} />
        <Logo />
        <div className="absolute md:flex items-center space-x-4 flex-row right-8 hidden ">
          <ul className="flex space-x-4 font-bold text-green-800">
            <li className="hover:text-green-900">
              <Link href="">Home</Link>
            </li>
            <li className="hover:text-green-900 hover: font-semibold">
              <Link href="">About Us</Link>
            </li>
            <li className="hover:text-green-900 hover: font-semibold">
              <Link href="">Contact</Link>
            </li>
            <li className="hover:text-green-900 hover: font-semibold">
              <Link href="">Login</Link>
            </li>
          </ul>
          <Link href="/getstarted"><button className="bg-green-800 hover:bg-green-900 text-white rounded-md p-2">
            Get Started
          </button></Link>
        </div>
      </div>

      <div className={`relative bg-green-600 p-8 h-[100vh] overflow-x-hidden transform transition-transform ${isMenuOpen ? 'translate-x-0' : 'hidden'} md:hidden`}>
        <ul className="flex flex-col  items-center space-y-6 font-bold text-white">
          <li className="hover:text-green-900">
            <Link href="">Home</Link>
          </li>
          <li className="hover:text-green-900 hover: font-semibold">
            <Link href="">About Us</Link>
          </li>
          <li className="hover:text-green-900 hover: font-semibold">
            <Link href="">Contact</Link>
          </li>
          <li className="hover:text-green-900 hover: font-semibold">
            <Link href="">Login</Link>
          </li>
        </ul>
        <div className="absolute bottom-2"><button className=" bg-green-800 hover:bg-green-900 text-white rounded-md p-2">
            Get Started
          </button></div>
      </div>
    </>
  );
};

export default Navbar;
