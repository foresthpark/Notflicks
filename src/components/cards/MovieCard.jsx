import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import "../css/moviecard.css"
import LinesEllipsis from 'react-lines-ellipsis'

const styles = {
  card: {
    maxWidth: 351,
  },
  media: {
    objectFit: 'cover',
  },
};

function MovieCard(props) {
<<<<<<< HEAD
  const { classes, release, title, poster, synopsis, movieid, rating, index, clicker } = props;
  const imgURL = "https://image.tmdb.org/t/p/w500";
=======
  const {classes, release, title, poster, synopsis, movieid, rating, index, clicker} = props;
  const imgURL = "https://image.tmdb.org/t/p/original";
  const lazyLoad = "?tr=w-1,h-1";
>>>>>>> bugfix_mainpage_carousel

  return (
    <div className="innnercard" id={index}>
      <Card className={classes.card}>
        <CardActionArea>
<<<<<<< HEAD
          <div id={movieid} onClick={clicker} ><CardMedia
            component="img"
            alt="a movie poster"
            className={classes.media}
            height="450"
            image={`${imgURL}` + poster}
            title={title}
            movieid={movieid}
          /></div>
=======
          <div id={index} onClick={clicker}>
            <CardMedia
              component="img"
              alt="a movie poster"
              className={classes.media}
              height="468"
              image={`${imgURL}${poster}${lazyLoad}`}
              title={title}
              movieid={movieid}
            />
          </div>
>>>>>>> bugfix_mainpage_carousel
          <CardContent>
            <Typography gutterBottom variant="title">
              <div className="moviecardtitle">{title}</div>
            </Typography>
            <Typography gutterBottom variant="subtitle1">
              <b>Release: </b>{release}
            </Typography>
            <Typography gutterBottom variant="subtitle1">
              <b>Rating: </b>{rating}
            </Typography>
            <Typography component="p">
              <LinesEllipsis
                text={synopsis}
                maxLine='3'
                ellipsis=' ...'
                trimRight
                basedOn='letters'
              />
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

MovieCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieCard);