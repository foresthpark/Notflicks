import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import LinesEllipsis from 'react-lines-ellipsis'


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function ReviewCard(props) {
  const {classes, author, content} = props;

  return (
    <div>
      <Paper className={classes.root} elevation={20}>
        <Typography variant="h5" component="h3">
          {author} says:
        </Typography>
        <Typography component="p">
          <LinesEllipsis
            text={content}
            maxLine='2'
            ellipsis=' ...'
            trimRight
            basedOn='letters'
          />
        </Typography>
      </Paper>
    </div>
  );
}

ReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReviewCard);