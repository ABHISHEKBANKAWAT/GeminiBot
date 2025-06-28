import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './routes/homepage/Homepage.jsx'
import DashboardPage from './routes/dashboardPage/DashboardPage.jsx'
import SigninPage from './routes/singInPage/signinpage.jsx'
import SignupPage from './routes/signUpPage/signUpPage.jsx'
import ChatPage from './routes/chatPage/ChatPage.jsx'
import Rootlayout from './layouts/rootlayouts/Rootlayout.jsx'
import Dashboardlayout from './layouts/Dashboardlayout/Dashboardlayout.jsx'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}


const router = createBrowserRouter([
  {
    element: <Rootlayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/sign-in",
        element: <SigninPage />,
      },
      {
        path: "/sign-up",
        element: <SignupPage />,
      },
      {
        element: <Dashboardlayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardPage />,
          },
          {
            path: "/dashboard/chat/:id",
            element: <ChatPage />,
          }
        ],
      }
    ],
    
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
