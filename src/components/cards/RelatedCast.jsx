import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LinesEllipsis from 'react-lines-ellipsis'
import ProfileImage from "../images/profile.png"
import "../css/moviecard.css"

const styles = {
  card: {
    maxWidth: 150,
  },
  media: {
    objectFit: 'cover',
  },
};

function RelateCast(props) {
  const {classes, poster, character, name, clicker, index} = props;
  const imgURL = "https://image.tmdb.org/t/p/original";
  const lazyLoad = "?tr=w-1,h-1";

  let fullURL;
  if (poster !== null) {
    fullURL = `${imgURL}${poster}${lazyLoad}`
  } else {
    fullURL = "https://i.imgur.com/8ccF0wO.png"
  }

  return (
    <div className="innnercard" id={index}>
      <Card className={classes.card}>
        <CardActionArea>
          <div id={index} onClick={clicker}>
            <CardMedia
              component="img"
              alt={name}
              className={classes.media}
              height="200"
              image={fullURL}
            />
          </div>
          <CardContent>
            <Typography gutterBottom variant="subtitle1">
              <div className="charactername">
                <b>
                  <LinesEllipsis
                    text={character}
                    maxLine='1'
                    ellipsis=' ...'
                    trimRight
                    basedOn='words'
                  />
                </b>
              </div>
            </Typography>
            <Typography gutterBottom variant="title">
              <div className="actorname">
                <div>{name}</div>
              </div>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
    ;
}

RelateCast.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RelateCast);