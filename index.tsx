import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Optional: wenn du eine Root-CSS Datei nutzt (z.B. fürs body margin reset)
// Lege dazu eine Datei "index.css" im Repo-Root an.
// Wenn du KEIN eigenes CSS willst, lass die nächste Zeile einfach weg.
import "./index.css";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
