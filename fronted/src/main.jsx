import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Contextprovider from "./context/context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ContextproviderRoute> */}

    <Contextprovider>
      <App />

    </Contextprovider>
    {/* </ContextproviderRoute> */}
  </StrictMode>
);