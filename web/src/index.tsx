import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { ThemeProvider, CssBaseline } from "@mui/material";

import * as themes from "./utils/Themes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={themes.dark}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
