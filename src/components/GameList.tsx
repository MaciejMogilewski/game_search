// @ts-nocheck

import GameFilter from "./GameFilter";
import React from "react";
import {filterType} from "./FilterTypes";
import {Alert, Box, Stack} from "@mui/material";
import GameCard from "./GameCard";
import {game} from "./GameTypes";
import Grid from "@mui/material/Unstable_Grid2"

type gameListProps = {
    games: game[];
    onFilterChange: React.Dispatch<React.SetStateAction<filterType>>
}

function GameList({games, onFilterChange}: gameListProps): JSX.Element {
    return (
        <Box>
            <GameFilter onFilterChange={onFilterChange}/>
            <Grid container spacing={2} marginTop={3}>
                {!games.length ? (
                    <Stack sx={{width: '100%'}} spacing={2}>
                        <Alert variant="filled" severity="success">
                            No games found
                        </Alert>
                    </Stack>
                ) : (
                    games.map((game) => (
                        <GameCard game={game} key={game.id}/>
                    ))
                )}

            </Grid>
        </Box>
    );
}

export default GameList;