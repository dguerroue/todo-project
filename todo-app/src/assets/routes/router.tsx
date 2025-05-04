import {
  createBrowserRouter,
} from "react-router";

import App from "../pages/App";
import Auth from "../pages/Auth";
import ProtectedRoute from "../components/ProtectedRoute";
import Logout from "../pages/Logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
    <ProtectedRoute>
      <App />
    </ProtectedRoute>
    ),
  },
  {
    path: '/auth',
    element: <Auth />,
  },
  {
    path: '/logout',
    element: <Logout />
  }
]);

export default router;