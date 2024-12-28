// src/components/Registration.js
import React from "react";

const Registration = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Register</h2>
      <form>
        <label>Username:</label>
        <input type="text" placeholder="Enter username" />
        <br />
        <label>Password:</label>
        <input type="password" placeholder="Enter password" />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;