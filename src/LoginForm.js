import React, { useState } from "react";
import { login } from "./authService";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = login(username, password);
    if (user) {
      onLogin(user);
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
      <input className="mt-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input className="mt-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600" type="submit">Login</button>
      {error && <p className="mt-4 text-red-500">{error}</p>}
    </form>
  );
};

export default LoginForm;