import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

const token = import.meta.env.VITE_CF_ANALYTICS_TOKEN;

if (token) {
  const script = document.createElement("script");
  script.defer = true;
  script.src = "https://static.cloudflareinsights.com/beacon.min.js";
  script.dataset.cfBeacon = JSON.stringify({ token });
  document.head.appendChild(script);
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
