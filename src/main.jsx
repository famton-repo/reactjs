import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { TemperatureProvider } from './context/TemperatureContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TemperatureProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </TemperatureProvider>
  </React.StrictMode>,
)
