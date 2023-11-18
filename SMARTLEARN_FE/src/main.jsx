import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MenuItems from './components/navbar/MenuItems.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MenuItems/>
    <App />
  </React.StrictMode>,
)
