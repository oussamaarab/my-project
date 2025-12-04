import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="font-display bg-background-light dark:bg-background-dark text-[#2D3748] dark:text-gray-200">
      <App />
    </div>
  </React.StrictMode>
);
