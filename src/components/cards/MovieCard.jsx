import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import LinesEllipsis from 'react-lines-ellipsis'
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import "../css/moviecard.css"

const styles = {
  card: {
    maxWidth: 351,
  },
  media: {
    objectFit: 'cover',
  },
};

function MovieCard(props) {
  const {classes, release, title, poster, synopsis, movieid, rating, index, clicker} = props;
  const imgURL = "https://image.tmdb.org/t/p/original";
  const lazyLoad = "?tr=w-1,h-1";
  const altPoster = `https://i.imgur.com/po9zfIz.png${lazyLoad}`
  let fullURL;
  if (poster !== null) {
    fullURL = `${imgURL}${poster}${lazyLoad}`
  } else {
    fullURL = altPoster
  }
  return (
    <div className="innnercard" id={index}>
      <Card className={classes.card}>
        <CardActionArea>
          <Link to={`/details/${movieid}`}>
            <div id={movieid} onClick={clicker}>
              <CardMedia
                component="img"
                alt="a movie poster"
                className={classes.media}
                height="468"
                image={fullURL}
                title={title}
                movieid={movieid}
              />
            </div>
          </Link>
        </CardActionArea>
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
      </Card>
      {props.loggedIn === true &&
      <button onClick={() => props.onUserSave(props.movie)}>
        Save
      </button>
      }
      {props.renderPage === 'userDetail' &&
        <button onClick={()=>{props.dbUserRemove(props.movie)}}>
        Remove
        </button>
      }
    </div>
  );
}

MovieCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieCard);