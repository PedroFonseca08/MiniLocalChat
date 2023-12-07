import { useState, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import ScrollTop from "./components/ScrollTop";
import RegisterPage from "./pages/register/RegisterPage";
import "./App.css";
import { UserContext } from "./contexts/UserContext";
import PageNotFound from "./pages/404/PageNotFound";

function App() {
  const [count, setCount] = useState(0);
  const { userId } = useContext(UserContext);

  return (
    <>
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route path="/" element={userId === -1 ? <LoginPage /> : <HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
