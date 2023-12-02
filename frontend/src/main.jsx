import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { ChatContextProvider } from "./contexts/ChatContext";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ChatContextProvider>
        <App />
      </ChatContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
)
