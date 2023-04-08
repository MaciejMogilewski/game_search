import React, {useState} from "react";
import {GENRES, PLATFORMS} from "./FilterConstants";
import {filterType} from "./FilterTypes";

type gameFilterProps = {
    onFilterChange: React.Dispatch<React.SetStateAction<filterType>>
}

function GameFilter({onFilterChange}: gameFilterProps) {
    const [platform, setPlatform] = useState(PLATFORMS[0].value);
    const [genre, setGenre] = useState(GENRES[0].value)

    function handlePlatform(event) {
        setPlatform(event.target.value)

        onFilterChange((prevState) => (
            {...prevState, platform: event.target.value}
        ));
    }

    function handleGenre(event) {
        setGenre(event.target.value)

        onFilterChange((prevState) => (
            {...prevState, genre: event.target.value}
        ))
    }

    return (
        <div>
            <label htmlFor="platform">Platform:</label>
            <select  id="platform" value={platform} onChange={handlePlatform}>
                {PLATFORMS.map((platform) => (
                    <option value={platform.value} key={platform.value}>{platform.display}</option>
                ))}
            </select>
            <label htmlFor="genre">Genre:</label>
            <select id="genre" value={genre} onChange={handleGenre}>
                {GENRES.map((genre) => (
                    <option value={genre.value} key={genre.value}>{genre.display}</option>
                ))}
            </select>
        </div>
    )
}

export default GameFilter;