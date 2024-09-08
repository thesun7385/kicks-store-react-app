import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// env variables
const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || "null";

// import google sing-in
import { GoogleOAuthProvider } from "@react-oauth/google";

// import the Provider component from react-redux
import { Provider } from "react-redux";
import store from "./store/index";

// Wrap the App component with the Provider component
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <Provider store={store}>
        <App />
      </Provider>
    </GoogleOAuthProvider>
  </StrictMode>
);
