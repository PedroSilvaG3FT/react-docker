import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/img/event.svg";

export default function Login({ history }) {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setPassword] = useState("");

  async function logar(e) {
    e.preventDefault();
    if (userEmail === "coder@teste.com" && userPassword === "cs") {
      const id = await 1;
      history.push(`/home/${id}`);
    }

    console.log(userEmail, userPassword);
  }

  return (
    <div className="login-container">
      <form onSubmit={logar}>
        <img src={logo} alt="BackOffice" />
        <input
          placeholder="Insira o seu email"
          value={userEmail}
          onChange={e => setUserEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Insira sua senha"
          value={userPassword}
          onChange={e => setPassword(e.target.value)}
        />

        <button type="submit ">Entrar</button>
        <div className="span-text">
          <span>Esqueci Senha</span>
        </div>
      </form>
    </div>
  );
}
