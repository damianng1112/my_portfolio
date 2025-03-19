import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #121212;
    color: #ffffff;
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

const darkTheme = {
  background: "#121212",
  text: "#ffffff",
  primary: "#8E44AD",
  secondary: "#2C3E50"
};

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={darkTheme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
)
