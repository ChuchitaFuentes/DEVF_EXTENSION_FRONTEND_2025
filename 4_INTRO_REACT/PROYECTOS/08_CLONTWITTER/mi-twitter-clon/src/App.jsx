import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import Login from "./pages/Login.jsx";
import {useState, useEffect} from "react";

import './App.css'

function App() {
  const [user, setUser] = useState(null);

  useEffect(() =>{
    const storeUser =localStorage.getItem("user");
    if (storeUser){
      setUser(JSON.parse(storeUser));
    }
  }, []);

  const login = (username) => {
    const userData = {username};
    setUser (userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser (null);
    localStorage.removeItem("user");
  };

  return (
   <Router>
    <Routes>
     <Route path="/login" element={<Login onLogin={login} />} />

  <Route
    path="/"
    element={user ? <Home user={user} logout={logout} /> : <Navigate to="/login" />}
  />

  <Route
    path="/profile"
    element={user ? <Profile user={user} /> : <Navigate to="/login" />}
  />
    </Routes>
   </Router>
  )
}

export default App
