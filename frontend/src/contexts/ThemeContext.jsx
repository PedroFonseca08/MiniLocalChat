import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
  theme: "",
  setTheme: () => {},
});

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    const root = window.document.documentElement;
    root.className = "";
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};