import { useState } from "react";
import {
  AiOutlineDown,
  AiOutlineMenuUnfold,
  AiOutlineShoppingCart,
  AiOutlineStar,
  AiOutlineUser,
} from "react-icons/ai";

const SideNavbar = ({ phoneDevice, handleClickTheme }) => {
  const [categories, setCategories] = useState(false);
  return (
    <div
      className={
        phoneDevice
          ? "fixed top-0 left-0 w-72 bg-gray-950 transition-all duration-300 h-screen bg-opacity-30 backdrop-blur-lg z-[100] dark:bg-opacity-30 dark:backdrop-blur-lg lg:hidden max-w-[85vw]"
          : "fixed top-0 -left-72 w-0 dark:bg-gray-950 transition-all duration-300 h-screen bg-opacity-30 backdrop-blur-lg z-[100] dark:bg-opacity-30 dark:backdrop-blur-lg"
      }
    >
      <ul className={"flex flex-col py-8 gap-1 text-xl px-4"}>
        <li className="dark:text-gray-200 px-2 mx-2 cursor-pointer hover:text-sky-500 dark:hover:text-sky-500 transition-all duration-200 flex items-center py-2">
          <AiOutlineUser className="mr-1" /> User
        </li>
        <li
          className="dark:text-gray-200 px-2 mx-2 cursor-pointer hover:text-sky-500 dark:hover:text-sky-500 transition-all duration-200 flex items-center py-2"
          onClick={handleClickTheme}
        >
          <AiOutlineStar className="mr-1" /> Dark / Light
        </li>
      </ul>
    </div>
  );
};

export default SideNavbar;