import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import "../../css/moviecard.css"

const styles = {
  card: {
    maxWidth: 351,
  },
  media: {
    objectFit: 'cover',
  },
};

function CastFace(props) {
  const {classes, picture, name, birthday, birthplace, id} = props;
  const imgURL = "https://image.tmdb.org/t/p/original";
  const lazyLoad = "?tr=w-1,h-1";
  const altPoster = "https://i.imgur.com/xrDlRFb.jpg"
  let fullURL;
  if (picture !== null) {
    fullURL = `${imgURL}${picture}${lazyLoad}`
  } else {
    fullURL = altPoster
  }

  return (
    <div className="facecard" id={id}>
      <Card className={classes.card}>
        <CardActionArea>
          <div id={id}>
            <CardMedia
              component="img"
              alt="a movie poster"
              className={classes.media}
              height="468"
              image={fullURL}
            />
          </div>
        </CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="title">
            <div className="moviecardtitle">
              {name}
            </div>
          </Typography>
          <Typography gutterBottom variant="subtitle1">
            <span role='img'
                  aria-label='string222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222'>🎂</span><b>{birthday}</b>
          </Typography>
          <Typography gutterBottom variant="subtitle1">
            {birthplace}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

CastFace.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CastFace);