import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import Guide from './routes/Guide';
import GlobalStyle from './GlobalStyle';
import Home from './routes/Home';
import Equipment from './routes/Equipment';
import Brew from './routes/Brew';
import { theme } from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<App />} path="/">
            <Route element={<Home />} index={true} />
            <Route element={<Guide />} path=":guideSlug">
              <Route element={<Equipment />} index={true} />
              <Route element={<Brew />} path="brew" />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
