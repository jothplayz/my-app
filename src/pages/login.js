import React from "react";
import Button from 'react-bootstrap/Button';



function Login() {
  return (
    <div style={{ textAlign: "center", alignItems: "center", justifyContent: "center"}} className="login-container">
      <h1>Login</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <br />
        <Button variant="primary" size="sm">Enter</Button>

      </form>
    </div>
  );
}

export default Login;