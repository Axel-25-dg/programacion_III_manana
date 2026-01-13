import type { RouteObject } from "react-router-dom";

const privateRoutes: RouteObject[] = [
  {
    path: "/dashboard",
    element: <div>Dashboard Page</div>,
  },
  {
    path: "/profile",
    element: <div>Profile Page</div>,
  },
  {
    path: "/settings",
    element: <div>Settings Page</div>,
  },
];

export default privateRoutes;