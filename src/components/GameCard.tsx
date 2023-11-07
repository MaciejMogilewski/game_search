import {Link} from "react-router-dom";
import React from "react";
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"
import Button from "@mui/material/Button";
import {game as gameInterface} from "./GameTypes";

type gameCardProps = {
    game: gameInterface
}

function GameCard({game}: gameCardProps) {
    return (
        <Grid xs={12} sm={6} md={4} lg={3}>
            <Card sx={{width: "100%", minHeight: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={game.thumbnail}
                        alt={game.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {game.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {game.short_description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {game.genre}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>

                    <Link to={`/games/${game.id}`} style={{textDecoration: "none"}}>
                        <Button variant="contained">
                            Read More
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>

    )
}

export default GameCard;