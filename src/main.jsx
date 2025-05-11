import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/header/header.jsx'
import Home from './pages/home/Page.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    element: <Home/>
  },
  {
    path : "/app",
    element: <App/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <RouterProvider router={router} />
  </StrictMode>,
)
