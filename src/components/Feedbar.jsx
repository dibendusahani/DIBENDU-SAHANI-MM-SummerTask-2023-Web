import { Favorite, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FavoriteBorder } from "@material-ui/icons";
const Feedbar = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=6004b8fcb1604003b4ead57854e8d2c2"
      )
      .then((res) => {
        console.log(res.data.articles);
        setNews(res.data.articles);
      });
  }, []);

  return (
    <>
      <Box flex={4} p={2}>
        {news.map((val) => {
          return (
            <>
            <Card sx={{margin: 3}}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "sky" }} aria-label="recipe">
                    A
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVert />
                  </IconButton>
                }
                title={val.title}
                subheader={val.author}
              />
              <CardMedia
                component="img"
                height="194"
                image={val.urlToImage}
                alt="Not rendering"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {val.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
                </IconButton>
                <IconButton aria-label="share">
                  <Share />
                </IconButton>
              </CardActions>
            </Card>
            </>
          );
        })}
      </Box>
    </>
  );
};

export default Feedbar;
