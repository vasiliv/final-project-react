// authService.js
const users = [
    { username: "user1", password: "password1", id: 1 },
    { username: "user2", password: "password2", id: 2 },
    // Add more dummy users as needed
  ];
  
  export const login = (username, password) => {
    // Simulate authentication by checking if user exists in dummy data
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      // If user exists, return user data
      return user;
    } else {
      // If user doesn't exist, return null
      return null;
    }
  };
  
  export const logout = () => {
    // Simulate logout by removing user data
    localStorage.removeItem("currentUser");
  };
  
  export const getCurrentUser = () => {
    // Get current user data from localStorage
    const userJson = localStorage.getItem("currentUser");
    return userJson ? JSON.parse(userJson) : null;
  };
  