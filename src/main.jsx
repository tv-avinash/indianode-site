import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home"; // Assuming Home.jsx is in the same directory
import "./style.css"; // Optional if you're using global styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
