import {
  createBrowserRouter,
} from "react-router";

import App from "../pages/App";
import Auth from "../pages/Auth";
import ProtectedRoute from "../components/ProtectedRoute";

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
  }
]);

export default router;