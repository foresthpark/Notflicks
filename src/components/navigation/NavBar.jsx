import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import {fade} from '@material-ui/core/styles/colorManipulator';
import {withStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import "../css/leftmenu.css"
import "../css/navbar.css"
import {Link, Redirect, withRouter} from "react-router-dom";

const styles = theme => ({
  list: {
    width: 250,
    height: '100%',
    backgroundColor: "#40BDDB",
  },
  fullList: {
    width: 'auto',
  },
  root: {
    width: '100%',
    backgroundColor: "#40BDDB",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});


class SearchAppBar extends React.Component {
  state = {
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    }, () => console.log(this.state.left));

  };

  render() {
    const {classes, renderPage, loggedIn, user} = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <Link to={'/'}>
            <ListItem>
              <div className="listitemstitle" onClick={renderPage} id='notflicks'>
                NotFlicks
              </div>
            </ListItem>
          </Link>
        </List>

        <Divider/>

        <List>
          <Link to={'/toprated'}>
            <ListItem button={true} id='toprated'>
              <div className="listitems" id='toprated'>
                Top rated
              </div>
            </ListItem>
          </Link>

          <Link to={'/nowplaying'}>
            <ListItem button={true} id='nowplaying'>
              <div className="listitems" id='nowplaying'>
                Now Playing
              </div>
            </ListItem>
          </Link>

          <Link to={'/upcoming'}>
            <ListItem button={true} id='upcoming'>
              <div className="listitems" id='upcoming'>
                Upcoming
              </div>
            </ListItem>
          </Link>

          <Link to={'/popular'}>
            <ListItem button={true} id='popular'>
              <div className="listitems" id='popular'>
                Popular
              </div>
            </ListItem>
          </Link>

        </List>
        <Divider/>
        <List>
          <Link to={'/about'}>
            <ListItem button={true} onClick={renderPage} id='about'>
              <div className="listitems" onClick={renderPage} id='about'>
                About
              </div>
            </ListItem>
          </Link>
          <Divider/>
          {loggedIn === false &&
          <Link to={'/signin'}>
            <ListItem button={true} onClick={renderPage} id='signin'>
              <div className="listitems" onClick={renderPage} id='signin'>
                Log In
              </div>
            </ListItem>
          </Link>
          }
          {loggedIn === false &&
          <Link to={'/register'}>
            <ListItem button={true} onClick={renderPage} id='register'>
              <div className="listitems" onClick={renderPage} id='register'>
                Register
              </div>
            </ListItem>
          </Link>
          }
          {loggedIn === true &&
          <Link to={'/user'}>
            <ListItem button={true} onClick={renderPage} id='signin'>
              <div className="listitems" onClick={renderPage} id='userDetail'>
                Welcome {user.name} !
              </div>
            </ListItem>
          </Link>
          }
          {loggedIn === true &&
          <Link to={'/'}>
            <ListItem button={true} onClick={this.props.onUserLogout} id='notflicks'>
              <div className="listitems" onClick={this.props.onUserLogout} id='notflicks'>
                Log Out
              </div>
            </ListItem>
          </Link>
          }
        </List>
      </div>
    )

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar style={{backgroundColor: "#40BDDB"}}>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Open drawer"
              onClick={this.toggleDrawer('left', true)}>
              <MenuIcon/>
            </IconButton>
            <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
              <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer('left', false)}
                onKeyDown={this.toggleDrawer('left', false)}
                className={classes.list}
              >
                {sideList}
              </div>
            </Drawer>
            <Typography className={classes.title} variant="h5" color="inherit">
              <Link to={'/'}>
                <div className="app_title" id='notflicks'>
                  Notflicks
                </div>
              </Link>
            </Typography>
            <div className={classes.grow}/>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon/>
              </div>
              <InputBase
                type='text'
                placeholder="Search…"
                id="searchInput"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                onChange={this.props.searchInput}
                onKeyPress={
                  (event) => {
                    if (event.key === 'Enter') {
                      this.props.history.push(`/results/search=${this.props.searchInputField}`)
                      this.props.searchDetail(this.props.searchInputField)
                    }
                  }
                }
                value={this.props.searchInputField}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

SearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(SearchAppBar));