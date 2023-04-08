import GameFilter from "./GameFilter";
import React from "react";
import {filterType} from "./FilterTypes";

export interface game {
    id: number;
    title: string;
    thumbnail: string;
    short_description: string;
    game_url: string;
    genre: string;
    platform: string;
    publisher: string;
    developer: string;
    release_date: string;
    freetogame_profile_url: string;
}

type gameListProps = {
    games: game[];
    onFilterChange: React.Dispatch<React.SetStateAction<filterType>>
}

function GameList({games, onFilterChange}: gameListProps): JSX.Element {
    return (
        <div>
            <GameFilter onFilterChange={onFilterChange}/>
            {games.map((game) => (
                <div key={game.id}>
                    {game.title}, {game.platform}, {game.genre}
                </div>
            ))}
        </div>
    );
}

export default GameList;