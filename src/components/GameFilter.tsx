// @ts-nocheck

import React, {useState} from "react";
import {GENRES, PLATFORMS} from "./FilterConstants";
import {filterType} from "./FilterTypes";
import {Box, InputLabel, MenuItem, Select, FormControl} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"

type gameFilterProps = {
    onFilterChange: React.Dispatch<React.SetStateAction<filterType>>
}


function GameFilter({onFilterChange}: gameFilterProps) {
    const [platform, setPlatform] = useState(PLATFORMS[0].value)
    const [genre, setGenre] = useState(GENRES[0].value)

    function handlePlatform(event) {
        setPlatform(event.target.value)

        onFilterChange((prevState) => ({...prevState, platform: event.target.value}))
    }

    function  handleGenre(event) {
        setGenre(event.target.value)

        onFilterChange((prevState) => (
            {...prevState, genre: event.target.value}
        ))
    }

    return (
        <Box sx={{flexGrow: 1, marginTop: 2}}>
            <Grid container spacing={2}>
                <Grid md={3} xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel id="platformLabel">Platform:</InputLabel>
                        <Select
                            labelId="platformLabel"
                            id="platform"
                            value={platform}
                            label="Platform"
                            onChange={handlePlatform}
                        >
                            {PLATFORMS.map((platform) => (
                                <MenuItem value={platform.value} key={platform.value}>
                                    {platform.display}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid md={3} xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel id="platformGenre">Genre:</InputLabel>
                        <Select
                            labelId="genreLabel"
                            id="genre"
                            value={genre}
                            label="Genre"
                            onChange={handleGenre}
                        >
                            {GENRES.map((genre) => (
                                <MenuItem value={genre.value} key={genre.value}>
                                    {genre.display}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Box>
    );
}

export default GameFilter;