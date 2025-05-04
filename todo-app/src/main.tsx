import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router";

import './assets/style/index.css'

// import ProtectedRoute from './assets/components/ProtectedRoute.tsx'
import router from './assets/routes/router.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <ProtectedRoute> */}
    <RouterProvider router={router} />
    {/* </ProtectedRoute> */}
  </StrictMode>,
)
