import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import MyProfile from "./pages/MyProfile";
import Submit from "./pages/Submit";
import MyPosts from "./pages/MyPosts";
import Logout from "./pages/Logout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/my_profile" element={<MyProfile />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/my_posts" element={<MyPosts />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
