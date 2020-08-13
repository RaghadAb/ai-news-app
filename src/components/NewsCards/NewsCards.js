import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import { Grid, Grow, Typography } from "@material-ui/core";

const NewsCards = ({ articles }) => {
  return (
    <Grow in>
      <Grid container alignItems="stretch" spacing={3}></Grid>
      {articles.map((article, i) => (
        <Grid item xs={12} sm={6} md={4} lrg={3}>
          <NewsCard />
        </Grid>
      ))}
    </Grow>
  );
};

export default NewsCards;
