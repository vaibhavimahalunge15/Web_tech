import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/dashboard">Dashboard</Link>
      <button onClick={() => localStorage.removeItem("token")}>Logout</button>
    </nav>
  );
};

export default Navbar;