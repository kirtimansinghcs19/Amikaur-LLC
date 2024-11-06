import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Make sure to import your global styles

// Wait for React to fully initialize before hiding the preloader
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// // Once React is ready, remove the loader and show the app
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  if (loader) {
    loader.style.display = "none"; // Hide loader
  }

  const root = document.getElementById("root");
  if (root) {
    root.style.display = "block"; // Show React root element
  }
});
