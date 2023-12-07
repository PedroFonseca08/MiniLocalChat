import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { ChatContextProvider } from "./contexts/ChatContext";
import './index.css'
import { UserContextProvider } from './contexts/UserContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <UserContextProvider>
      <ChatContextProvider>
        <App />
      </ChatContextProvider>
      </UserContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
)
