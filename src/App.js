import './App.css';
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { getCurrentUser, logout } from "./authService";
import carsData from './carsData';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from './Card';
import Details from './Details';
import Favorites from './Favorites';

function App() {  
  const imagePerRow = 4;
  const [currentUser, setCurrentUser] = useState(getCurrentUser());
  const [next, setNext] = useState(imagePerRow);
  const [favorites, setFavorites] = useState([]);

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
  const handleFavoriteToggle = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
    // console.log(favorites);
  };
  console.log(currentUser)
  return (
    <div>
      {currentUser ? (        
        <div>
          {/* After successful login */}
          <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded" onClick={handleLogout}>Logout</button>          
          <Router>
            <div>
              <Routes>
                <Route
                  path="/"
                  element=
                  <div>
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
                        onFavoriteToggle={handleFavoriteToggle}
                      />
                    ))}                    
                                                         
                  </div>
                  <div>{next < carsData?.length && (
                      <div className="flex justify-end mt-4">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={handleMoreImage}>
                          Load more
                        </button>
                      </div>
                    )}                    
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mt-8">Favorites</h2>
                    <Favorites favorites={favorites} data={carsData} />   
                  </div>                    
                </div>
                />
                <Route path="/details/:id" element={<Details carsData = {carsData} />} />
                {/* <Route path="/favorites" element={<Favorites favorites={favorites} data={carsData} />} /> */}
                <Route path="/favorites" element={
            <div>
              <h2 className="text-3xl font-bold">Favorites</h2>
              <Favorites favorites={favorites} data={carsData} />
            </div>
          } />
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
