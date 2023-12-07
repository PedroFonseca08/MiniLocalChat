import { useState, useContext } from "react";
import { isEmailValid } from "./../../helpers/EmailHelper";
import ValidationError from "./../../components/validation-error/ValidationError";
import "./RegisterPage.css";
import { useNavigate } from "react-router-dom";
import HeaderLogin from "../../components/HeaderLogin";
import { UserContext } from "../../contexts/UserContext";

function LoginPage() {
  const [form, setForm] = useState({
    email: {
      hasChanged: false,
      value: "",
    },
    username: {
      hasChanged: false,
      value: "",
    },
    password: {
      hasChanged: false,
      value: "",
    },
  });

  const navigate = useNavigate();
  const { changeUserID } = useContext(UserContext);

  const goToHomePage = (idUsuario) => {
    changeUserID(idUsuario);
    navigate("/", { state: { idUsuario } });
  };

  const handleRegister = () => {
    const objUsuario = {
      emailUsuario: form.email.value,
      nomeUsuario: form.username.value,
      senhaUsuario: form.password.value,
    };

    const url = "http://localhost:8080/usuario";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objUsuario),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao criar usuário");
        }
        console.log("Json:", response);
        return response.json();
      })
      .then((data) => {
        console.log("Usuário criado com sucesso:", data);

        const idUsuario = data.idUsuario;
        goToHomePage(idUsuario);
      })
      .catch((error) => {
        console.error("Erro ao criar usuário:", error);
      });
  };

  return (
    <main className="centralize">
      <HeaderLogin />
      <form className="flex flex-col justify-center items-center">
        <div className="usernameField">
          <input
            type="text"
            placeholder="Nome de Usuário"
            value={form.username.value}
            onChange={(event) =>
              setForm({
                ...form,
                username: {
                  hasChanged: true,
                  value: event.target.value,
                },
              })
            }
            data-testid="username"
          />
        </div>
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
          {form.email.hasChanged && form.email.value && (
            <ValidationError
              hasChanged={form.email.hasChanged}
              errorMessage="Email é inválido"
              testId="email-invalid"
              type="email"
              value={form.email.value}
            />
          )}
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
          {/* <ValidationError
            hasChanged={form.password.hasChanged}
            errorMessage="Senha é obrigatória"
            testId="password-required"
            type="required"
            value={form.password.value}
          /> */}
          {form.password.hasChanged && form.password.value && (
            <ValidationError
              hasChanged={form.password.hasChanged}
              errorMessage="A senha deve ter pelo menos 8 caracteres"
              testId="password-required"
              type="password"
              value={form.password.value}
            />
          )}
        </div>

        <button
          type="button"
          className="dark:text-gray-200 px-2 mx-2 cursor-pointer hover:text-sky-500 dark:hover:text-sky-500 transition-all duration-200 flex items-center py-2"
          data-testid="login-button"
          disabled={!isEmailValid(form.email.value) || !form.password.value}
          onClick={handleRegister}
        >
          Registrar
        </button>
      </form>
    </main>
  );
}

export default LoginPage;
