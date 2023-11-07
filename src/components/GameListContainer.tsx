import GameList from "./GameList";
import {useFetchGames} from "../hooks/useFetchGames";
import {useState} from "react";

function GameListContainer(): JSX.Element {
    const [filters, setFilters] = useState({
        platform: 'browser',
        sortBy: 'relevance'
    });

    const {games} = useFetchGames(filters)

    return (
        <GameList games={games} onFilterChange={setFilters}/>
    );
}

export default GameListContainer;