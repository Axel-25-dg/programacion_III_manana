import type { RouteObject } from "react-router-dom";

const publicRoutes: RouteObject[] = [
  {
    path: "/login",
    element: <div>Login Page</div>,
  },
  {
    path: "/register",
    element: <div>Register Page</div>,
  },
  {
    path: "/forgot-password",
    element: <div>Forgot Password Page</div>,
  },
];

export default publicRoutes;