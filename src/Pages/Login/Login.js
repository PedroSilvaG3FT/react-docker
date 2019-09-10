import React, { useState } from "react";
import "./Login.css";

//MATERIAL-UI
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

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

  function goToregister() {
    history.push("/registerUser");
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="container-register-user">
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className="form" onSubmit={logar}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoFocus
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                value={userEmail}
                onChange={e => setUserEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
                value={userPassword}
                onChange={e => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth className="button-primary">
            Entrar
          </Button>
          <Grid className="span-text">
            <span onClick={goToregister}>Cadastre-se</span>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
