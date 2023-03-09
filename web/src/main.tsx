import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// if any errors try https://reactrouter.com/en/main/start/tutorial
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
