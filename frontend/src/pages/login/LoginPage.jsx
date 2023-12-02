import { useState } from "react";
import { isEmailValid } from "../../helpers/EmailHelper";
import ValidationError from "../../components/validation-error/ValidationError";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import HeaderLogin from "../../components/HeaderLogin";

function LoginPage() {
  const [form, setForm] = useState({
    email: {
      hasChanged: false,
      value: "",
    },
    password: {
      hasChanged: false,
      value: "",
    },
  });

  const navigate = useNavigate();
  const goToRegisterPage = () => {
    navigate("/register");
  };
  const goToHomePage = () => {
    navigate("/home");
  };

  return (
    <main className="centralize">
      <HeaderLogin />
      <form className="flex flex-col justify-center items-center">
        <div className="emailField">
          <input
            type="email"
            placeholder="Email"
            value={form.email.value}
            onChange={(event) =>
              setForm({
                ...form,
                email: {
                  hasChanged: true,
                  value: event.target.value,
                },
              })
            }
            data-testid="email"
          />
          <ValidationError
            hasChanged={form.email.hasChanged}
            errorMessage="Email é obrigatório"
            testId="email-required"
            type="required"
            value={form.email.value}
          />
          <ValidationError
            hasChanged={form.email.hasChanged}
            errorMessage="Email é inválido"
            testId="email-invalid"
            type="email"
            value={form.email.value}
          />
        </div>

        <div className="passwordField">
          <input
            type="password"
            placeholder="Senha"
            value={form.password.value}
            onChange={(event) =>
              setForm({
                ...form,
                password: {
                  hasChanged: true,
                  value: event.target.value,
                },
              })
            }
            data-testid="password"
          />
          <ValidationError
            hasChanged={form.password.hasChanged}
            errorMessage="Senha é obrigatória"
            testId="password-required"
            type="required"
            value={form.password.value}
          />
        </div>

        <button
          type="button"
          className="dark:text-gray-200 px-2 mx-2 cursor-pointer hover:text-sky-500 dark:hover:text-sky-500 transition-all duration-200 flex items-center py-2"
          data-testid="login-button"
          disabled={!isEmailValid(form.email.value) || !form.password.value}
          onClick={goToHomePage}
        >
          Entrar
        </button>
        <button
          type="button"
          className="dark:text-gray-200 px-2 mx-2 cursor-pointer hover:text-sky-500 dark:hover:text-sky-500 transition-all duration-200 flex items-center py-2"
          data-testid="register-button"
          onClick={goToRegisterPage}
        >
          Registrar
        </button>
      </form>
    </main>
  );
}

export default LoginPage;
