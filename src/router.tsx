import { createBrowserRouter } from "react-router-dom";
import GameListContainer from "./components/GameListContainer";

// eslint-disable-next-line import/prefer-default-export
export const router = createBrowserRouter([
    {
        path: "/",
        element: <GameListContainer />
    },
    {
        path: "/games/:gameId",
        element: <h1>Game</h1>,
    },
]);