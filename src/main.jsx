import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import UserProvider from './Context/usersContext.jsx'
import { ProductProvider } from './Context/ProductContext.jsx'
import { MessagesProvider } from './Context/messagesContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
      <ProductProvider>
        <MessagesProvider>
            <App />
        </MessagesProvider>
      </ProductProvider>
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
)