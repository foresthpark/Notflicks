import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import "../css/moviecard.css"

const styles = {
  card: {
    maxWidth: 330,
  },
  media: {
    objectFit: 'cover',
  },
};

function AboutCard(props) {
  const {classes, name, email, github, image, key, story, linked} = props;


  return (
    <div className="innnercard" id={key}>
      <Card className={classes.card}>
        <div id={key}>
          <CardMedia
            component="img"
            alt="a movie poster"
            className={classes.media}
            height="440"
            image={image}
            title={name}
          />
        </div>
        <CardContent>
          <Typography gutterBottom>
            <div className="moviecardtitle">{name}</div>
          </Typography>
          <Typography gutterBottom variant="subtitle1">
            <div className="githublink">
              <b>Email: </b><a href={`mailto:${email}`} rel="noopener">{email}</a>
            </div>
          </Typography>
          <Typography gutterBottom variant="subtitle1">
            <div className="githublink">
              <b>Github: </b><a href={github} rel="noreferrer noopener" target="_blank">{github.slice(8)}</a>
            </div>
          </Typography>
          <Typography gutterBottom variant="subtitle1">
            <div className="githublink">
              <b>LinkedIn: </b><a href={linked} rel="noreferrer noopener" target="_blank">{linked.slice(8)}</a>
            </div>
          </Typography>
          <Typography component="p">

            <div>
              {story}
            </div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

AboutCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutCard);