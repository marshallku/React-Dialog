import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Dialog from "./components/Dialog";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
        <Dialog />
    </React.StrictMode>
);
