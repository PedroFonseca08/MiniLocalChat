import "./userPage.css";
import { useNavigate } from "react-router-dom";
import HeaderLogin from "../../components/HeaderLogin";

function LoginPage() {

    /*
  const navigate = useNavigate();
  
  const goToRegisterPage = () => {
    navigate("/register");
  };

  const goToHomePage = () => {
    navigate("/home");
  };
  */

  return (
    <main className="centralize">
      <HeaderLogin/>
    </main>
  );
}

export default LoginPage;
