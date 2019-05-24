import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import "../css/moviecard.css"

const styles = {
  card: {
    maxWidth: 210,
  },
  media: {
    objectFit: 'cover',
  },
};

function RelatedMovies(props) {
  const {classes, title, poster, movieid, index, clicker} = props;
  const imgURL = "https://image.tmdb.org/t/p/original";
  const lazyLoad = "?tr=w-1,h-1";
  const fullImage = `${imgURL}${poster}${lazyLoad}`

  return (
    <div className="innnercard" id={index}>
      <Card className={classes.card}>
        <CardActionArea>
          <div id={movieid} onClick={clicker}>
            <CardMedia
              component="img"
              alt="a movie poster"
              className={classes.media}
              height="300"
              image={fullImage}
              title={title}
              movieid={movieid}
            />
          </div>
        </CardActionArea>
      </Card>
    </div>
  );
}

RelatedMovies.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RelatedMovies);