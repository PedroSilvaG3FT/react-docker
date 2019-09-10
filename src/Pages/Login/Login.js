import React from "react";
import "./Login.css";
import logo from "../../assets/img/event.svg";

export default function Login() {
  return (
    <div className="login-container">
      <form>
        <img src={logo} alt="BackOffice" />
        <input placeholder="Insira o seu email" />
        <input type="password" placeholder="Insira sua senha" />

        <button type="submit ">Entrar</button>
        <div className="span-text">
          <span>Esqueci Senha</span>
        </div>
      </form>
    </div>
  );
}
