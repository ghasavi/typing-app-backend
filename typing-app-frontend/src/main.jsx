import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { TypingProvider } from "./context/TypingContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <TypingProvider>
                <App />
            </TypingProvider>
        </BrowserRouter>
    </React.StrictMode>
);