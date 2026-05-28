import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./assets/font/berlin.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="162298599540-103hmnhdsi9cbk8tp50eohd10ri6mb8f.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>

    <Toaster position="top-right" reverseOrder={false} />
  </StrictMode>

);
