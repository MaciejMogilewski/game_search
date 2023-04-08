import { createBrowserRouter } from "react-router-dom";

// eslint-disable-next-line import/prefer-default-export
export const router = createBrowserRouter([
    {
        path: "/",
        element: <h1>Home</h1>,
    },
    {
        path: "/games/:gameId",
        element: <h1>Game</h1>,
    },
]);