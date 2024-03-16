import './App.css';
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { getCurrentUser, logout } from "./authService";
import carsData from './carsData';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from './Card';
import Details from './Details';

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
          {/* yAfter successful login */}
          {/* <h1>Welcome, {currentUser.username}!</h1>
          <button onClick={handleLogout}>Logout</button> */}
          <Router>
            <div>
              <Routes>
                <Route
                  path="/"
                  element={carsData.map((item) => (
                    <Card
                      key={item.id}
                      id={item.id}
                      brand={item.brand}
                      model={item.model}
                      year={item.year}
                      color={item.color}
                      price={item.price}
                      description={item.description}
                    />
                  ))}
                />
                <Route path="/details/:id" element={<Details carsData = {carsData} />} />
              </Routes>
            </div>
        </Router>
        </div>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
