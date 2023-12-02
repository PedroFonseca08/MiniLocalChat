import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    console.log("Erro em ThemeContext");
  }
  return context;
};