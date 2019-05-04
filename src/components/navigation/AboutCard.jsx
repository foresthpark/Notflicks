import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LinesEllipsis from 'react-lines-ellipsis'
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
  const {classes, name, email, github, image, key, story} = props;


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
          <Typography gutterBottom variant="title">
            <div className="moviecardtitle">{name}</div>
          </Typography>
          <Typography gutterBottom variant="subtitle1">
            <div className="githublink">
              <b>Email: </b><a href={`mailto:${email}`} rel="noopener">{email}</a>
            </div>
          </Typography>
          <Typography gutterBottom variant="subtitle1">
            <div className="githublink">
              <b>Github: </b><a href={github} rel="noreferrer noopener" target="_blank">{github}</a>
            </div>
          </Typography>
          <Typography component="p">
            <LinesEllipsis
              text={story}
              maxLine='3'
              ellipsis=' ...'
              trimRight
              basedOn='letters'
            />
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