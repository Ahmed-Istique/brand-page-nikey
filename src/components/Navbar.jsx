import React from "react";
import logo from "../assets/brand_logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    { name: "Home", link: "/" },
    { name: "Menu", link: "/menu" },
    { name: "Category", link: "/category" },
    { name: "Location", link: "/location" },
    { name: "About", link: "/about" },
  ];

  return (
    <div className="flex justify-between items-center">
      <img src={logo} alt="logo" />
      <div>
        <ul className="flex">
          {links.map(({ link, name }) => (
            <li key={name}>
              <Link className="px-6" to={link}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <button className="inline-flex items-start py-3.5 px-10 bg-red-600 "><span className="text-white">LogIn</span> </button>
    </div>
  );
};

export default Navbar;
