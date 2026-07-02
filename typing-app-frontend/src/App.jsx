import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Statistics from "./pages/Statistics";

function App() {

  return (

      <Routes>

        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/home" element={<Home />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/leaderboard" element={<Leaderboard />} />

        <Route path="/profile" element={<Profile />} />

          <Route path="/leaderboard" element={<Leaderboard />} />

          <Route path="/statistics" element={<Statistics />} />
      </Routes>

  );

}

export default App;