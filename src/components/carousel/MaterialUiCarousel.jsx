import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import {autoPlay} from 'react-swipeable-views-utils';
import "../css/materialcarousel.css"
import LinesEllipsis from 'react-lines-ellipsis'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    padding: 20
  },
  image: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: "column",
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: "column",
    padding: 10,
    height: 30
  },
  header: {
    display: 'flex',
    textAlign: 'center',
    height: 40,
    // paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 400,
    display: 'block',
    maxWidth: 300,
    overflow: 'hidden',
    width: '100%',
  },
});

class MaterialUiCarousel extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange = activeStep => {
    this.setState({activeStep});
  };

  render() {
    const {classes, theme, movies, head} = this.props;
    const {activeStep} = this.state;
    const maxSteps = movies.results.length;
    const imgURL = "https://image.tmdb.org/t/p/original";
    const lazyLoad = "?tr=w-1,h-1"

    return (
      <div className={classes.root}>

        <Paper square elevation={0} className={classes.title}>

          <Typography gutterBottom variant="title">
            <div className="carouseltitle">{head}</div>
          </Typography>
        </Paper>

        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {movies.results.map((movie, index) => (
            <div key={movie.title} className={classes.image} id={movie.id} onClick = {this.props.getMovieDetail}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img className={classes.img} src={`${imgURL}${movie.poster_path}${lazyLoad}`} alt={movie.label}/>
              ) : null}
              <Paper square elevation={0} className={classes.footer}>
                <Typography gutterBottom variant="title">
                  <div className="carouseltitle">
                    <LinesEllipsis
                      text={movie.title}
                      maxLine='2'
                      // lineHeight='20'
                      ellipsis=' ...'
                      trimRight
                      basedOn='letters'
                    />
                  </div>
                </Typography>
              </Paper>
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
              <div className="backnextbutton">
                Next
              </div>
              {theme.direction === 'rtl' ? <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}
              <div className="backnextbutton">
                Back
              </div>
            </Button>
          }
        />
      </div>
    );
  }
}

MaterialUiCarousel.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(MaterialUiCarousel);