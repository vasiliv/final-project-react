import './App.css';
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { getCurrentUser, logout } from "./authService";

function App() {
  const [currentUser, setCurrentUser] = useState(getCurrentUser());

  const handleLogin = (user) => {
    // Store current user data in localStorage
    localStorage.setItem("currentUser", JSON.stringify(user));
    setCurrentUser(user);
  };

  const handleLogout = () => {
    // Remove current user data from localStorage
    logout();
    setCurrentUser(null);
  };

  return (
    <div>
      {currentUser ? (
        <div>
          <h1>Welcome, {currentUser.username}!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
