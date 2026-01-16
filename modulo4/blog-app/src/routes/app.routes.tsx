import type { RouteObject } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import PrivateLayout from "../layouts/PrivateLayout";
import PublicHome from "../pages/public/PublicHome";
import PublicPostDetail from "../pages/public/PublicPostDetail";
// import Login from "../pages/public/Login";
// import Register from "../pages/public/Register";
import DashboardHome from "../pages/private/DashboardHome";
import RequireAuth from "./RequireAuth";

export const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <PublicHome /> },
      { path: "posts/:id", element: <PublicPostDetail /> },
      // { path: "auth/login", element: <Login /> },
      // { path: "auth/register", element: <Register /> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <RequireAuth>
        <PrivateLayout />
      </RequireAuth>
    ),
    children: [
      { index: true, element: <DashboardHome /> },
    ],
  },
];