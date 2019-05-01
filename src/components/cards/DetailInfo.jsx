import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import LinesEllipsis from 'react-lines-ellipsis'
import "../css/moviecard.css"

const styles = {
  card: {
    maxWidth: 150,
  },
  media: {
    objectFit: 'cover',
  },
};

function DetailInfo(props) {
  const {classes, release, title, poster, synopsis, movieid, rating, index, clicker} = props;
  const imgURL = "https://image.tmdb.org/t/p/original";
  const lazyLoad = "?tr=w-1,h-1";

  return (
    <div className="innnercard" id={index}>
      <Card className={classes.card}>
        <CardActionArea>
          <div id={movieid} onClick={clicker}>
            <CardMedia
              component="img"
              alt="a movie poster"
              className={classes.media}
              height="200"
              image={`${imgURL}${poster}${lazyLoad}`}
              title={title}
              movieid={movieid}
            />
          </div>
          {/*<CardContent>*/}
          {/*<Typography gutterBottom variant="title">*/}
          {/*<div className="moviecardtitle">{title}</div>*/}
          {/*</Typography>*/}
          {/*<Typography gutterBottom variant="subtitle1">*/}
          {/*<b>Release: </b>{release}*/}
          {/*</Typography>*/}
          {/*<Typography gutterBottom variant="subtitle1">*/}
          {/*<b>Rating: </b>{rating}*/}
          {/*</Typography>*/}
          {/*<Typography component="p">*/}
          {/*<LinesEllipsis*/}
          {/*text={synopsis}*/}
          {/*maxLine='3'*/}
          {/*ellipsis=' ...'*/}
          {/*trimRight*/}
          {/*basedOn='letters'*/}
          {/*/>*/}
          {/*</Typography>*/}
          {/*</CardContent>*/}
        </CardActionArea>
      </Card>
    </div>
  );
}

DetailInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetailInfo);