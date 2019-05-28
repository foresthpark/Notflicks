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
import Popup from "reactjs-popup";
import Button from '@material-ui/core/Button';
import '../css/buttons.css'

const styles = {
  card: {
    maxWidth: 351,
  },
  media: {
    objectFit: 'cover',
  },
  button: {
    paddingLeft: '10px',
    paddingBottom: '10px'
  }
};

function MovieCard(props) {
  const {classes, release, title, poster, synopsis, movieid, rating, index, clicker, userId, movie, onUserSave} = props;
  const imgURL = "https://image.tmdb.org/t/p/original";
  const lazyLoad = "?tr=w-1,h-1";
  const altPoster = `https://i.imgur.com/po9zfIz.png${lazyLoad}`
  let fullURL;
  if (poster !== null) {
    fullURL = `${imgURL}${poster}${lazyLoad}`
  } else {
    fullURL = altPoster
  }

  const handleClick = () => {
    console.log('now', userId)
    props.onUserSave(props.movie, userId)
  }

  const handleClick2 = () => {
    console.log('then', userId)
    props.dbUserRemove(props.movie, props.userId)
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
          <Typography gutterBottom>
            <div className="moviecardtitle">{title}</div>
          </Typography>
          <Typography gutterBottom variant="subtitle1">
            <b>Release: </b>{release}
          </Typography>
          <Typography gutterBottom variant="subtitle1">
            <b>Rating: </b>⭐{rating}
          </Typography>
          <LinesEllipsis
            text={synopsis}
            maxLine='3'
            ellipsis=' ...'
            trimRight
            basedOn='letters'
          />
        </CardContent>

        {props.loggedIn === true &&
        <div className='moviecardbutton'>
          <Popup trigger={<Button variant="outlined" style={styles.button}>
            Save
          </Button>} onOpen={() => handleClick()} position="right center">

            <div className='successfullsave'>
              Successfully Saved!!
              <Link to={`/user/${userId}`}>
                <div className='gotosaved'>
                  [Click here to go to saved movies]
                </div>
              </Link>
            </div>

          </Popup>
        </div>
        }
        {props.renderPage === 'userDetail' &&
        <div className='moviecardbutton'>
          <Button variant="outlined" onClick={handleClick2}>
            Remove
          </Button>
        </div>
        }
      </Card>
    </div>
  );
}

MovieCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieCard);