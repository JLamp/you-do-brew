import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Guide from "./routes/Guide";
import GlobalStyle from "./GlobalStyle";
import Home from "./routes/Home";
import Equipment from "./routes/Equipment";
import Brew from "./routes/Brew";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path=":guideSlug" element={<Guide />}>
              <Route index element={<Equipment />} />
              <Route path="brew" element={<Brew />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
