import { createBrowserRouter } from "react-router-dom";
import publicRoutes from "./publicRoutes";
import privateRoutes from "./privateRoutes";
import PublicLayout from "../components/PublicLayout";
import { Home } from "../pages/Home";
import { PostDetail } from "../pages/PostDetail";

const routes = [
    {
        element: <PublicLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "post/:id",
                element: <PostDetail />,
            },
            ...publicRoutes,
        ],
    },
    ...privateRoutes,
];

const router = createBrowserRouter(routes);

export default router;