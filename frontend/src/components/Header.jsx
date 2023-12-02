import { useState } from "react";
import Navbar from "./Navbar";
import SideNavbar from "./SideNavbar";
import { useThemeContext } from "../hooks/useThemeContext";

const Header = () => {
  const [phoneDevice, setPhoneDevice] = useState(false);
  const { theme, setTheme } = useThemeContext();

  const handleClickToggle = () => {
    setPhoneDevice(!phoneDevice);
  };

  const handleClickTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
    console.log("Switch theme");
  };

  return (
    <>
      <Navbar
        handleClickToggle={handleClickToggle}
        phoneDevice={phoneDevice}
        handleClickTheme={handleClickTheme}
        setPhoneDevice={setPhoneDevice}
      />
      <SideNavbar
        phoneDevice={phoneDevice}
        handleClickTheme={handleClickTheme}
      />
    </>
  );
};

export default Header;