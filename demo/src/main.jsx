import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "i18n/config";

import "styles/index.css";

import "simplebar-react/dist/simplebar.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
