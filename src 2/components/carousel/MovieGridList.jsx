import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Scroll from "../../containers/App";

{/***********************************/
}
{/*<MovieGridList movies={movies[0]} getMovieDetail={onGetMovieDetail}/>*/
}
{/***********************************/
}


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    height: "100%"
  },
  gridList: {
    width: "100%",
    height: "100%",
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
function MovieGridList(props) {
  const {classes, movies, getMovieDetail} = props;
  const imgURL = "https://image.tmdb.org/t/p/original";
  const lazyLoad = "?tr=w-1,h-1";

  return (
    <div className={classes.root}>
      <GridList cellHeight={500} cols={5} className={classes.gridList}>
        {/*<GridListTile key="Subheader" cols={2} style={{height: 'auto'}}>*/}
        {/*<ListSubheader component="div">Top Rated Movies</ListSubheader>*/}
        {/*</GridListTile>*/}
        {movies.results.map(movie => (
          <GridListTile key={movie.poster_path}>
            <img src={`${imgURL}${movie.poster_path}${lazyLoad}`} onClick={getMovieDetail} alt={movie.title}
                 id={movie.id}/>
            <GridListTileBar
              title={movie.title}
              subtitle={<span>{movie.tagline}</span>}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

MovieGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieGridList);