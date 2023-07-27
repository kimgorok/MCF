import React from "react";
import ReactDOM from "react-dom/client";

import { createGlobalStyle } from "styled-components";
import "./index.css";

import App from "./App";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  background-color:black;
}
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);
