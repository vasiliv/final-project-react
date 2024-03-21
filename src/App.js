import './App.css';
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { getCurrentUser, logout } from "./authService";
import carsData from './carsData';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from './Card';
import Details from './Details';

function App() {
  const imagePerRow = 4;
  const [currentUser, setCurrentUser] = useState(getCurrentUser());
  const [next, setNext] = useState(imagePerRow);

  const handleLogin = (user) => {
    // Store current user data in localStorage
    localStorage.setItem("currentUser", JSON.stringify(user));
    setCurrentUser(user);
  };

  const handleMoreImage = () => {
    setNext(next + imagePerRow);
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
          {/* After successful login */}          
          <Router>
            <div>
              <Routes>
                <Route
                  path="/"
                  element=
                  <div className="grid grid-cols-4 gap-4">
                    {carsData?.slice(0, next)?.map((item) => (
                      <Card
                        key={item.id}
                        id={item.id}
                        brand={item.brand}
                        model={item.model}
                        year={item.year}
                        color={item.color}
                        price={item.price}
                        description={item.description}
                        image = {item.image}
                      />
                    ))}
                    {next < carsData?.length && (
                      <button className="mt-4" onClick={handleMoreImage}>
                        Load more
                      </button>
                    )}
                  </div>
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
