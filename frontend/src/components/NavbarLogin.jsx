import {
  AiOutlineStar,
  AiOutlineMenuUnfold,
  AiFillThunderbolt,
  AiOutlineMenu,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineSetting,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { IoTriangleSharp } from "react-icons/io5";
import { useState } from "react";
import { FaGlasses } from "react-icons/fa";

const Navbar = ({
  handleClickToggle,
  phoneDevice,
  handleClickTheme,
  setPhoneDevice,
}) => {
  const [settings, setSettings] = useState(false);
  const [categories, setCategories] = useState(false);

  return (
    <nav className="bg-gray-50 dark:bg-gray-950 fixed w-full top-0 flex bg-opacity-30 backdrop-blur-lg z-[100] dark:bg-opacity-30 dark:backdrop-blur-lg h-20">
      <div className="max-w-screen-xl mx-auto p-4 flex justify-between items-center ">
        <NavLink to="/">
          <div className="group px-4 flex justify-beetween items-center cursor-pointer justify-center transition-all duration-700">
            <FaGlasses className="text-sky-400 text-4xl group-hover:rotate-[360deg] duration-700 transition-all" />
          </div>
        </NavLink>
        <div>
          <ul className="lg:flex  items-center hidden transition-all duration-200">
            <div
              onMouseEnter={() => setSettings(true)}
              onMouseLeave={() => setSettings(false)}
            >
              <li className="dark:text-gray-200 px-2 mx-2 cursor-pointer hover:text-sky-500 dark:hover:text-sky-500 transition-all duration-200 flex items-center py-2">
                <AiOutlineSetting className="mr-1" /> Settings
              </li>
              <div
                className={
                  "absolute top-14 translate-x-5 duration-500 transition-all " +
                  (settings ? "" : "hidden")
                }
              >
                <IoTriangleSharp className="relative w-4 h-4 dark:text-gray-800 text-gray-50 top-[4px] left-2" />
                <ul className="rounded flex flex-col justify-center relative bg-gray-50 dark:bg-gray-800 py-2 px-2 shadow-lg ">
                  <li
                    className="rounded dark:text-gray-200 px-2 w-full cursor-pointer dark:hover:text-sky-500 hover:text-sky-500 transition-all duration-200 flex items-center py-2"
                    onClick={handleClickTheme}
                  >
                    Dark / Light
                  </li>
                </ul>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <button className="block lg:hidden " onClick={handleClickToggle}>
        <AiOutlineMenu
          className={
            "h-10 mx-4 transition-all duration-200 text-xl " +
            (phoneDevice ? "text-sky-500" : "dark:text-gray-200")
          }
        />
      </button>
    </nav>
  );
};

export default Navbar;
