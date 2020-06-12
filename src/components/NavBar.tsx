import React from 'react';

import {
  fade,
  makeStyles,
  Theme,
  createStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';

import {
  AppBar,
  Menu,
  MenuItem,
  Badge,
} from '@material-ui/core';

import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
      height: '15vh',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'block',
      },
      marginRight: '4vw',
    },
    search: {
      position: 'relative',
      borderRadius: '40px',
      backgroundColor: '#FFFFFF',
      '&:hover': {
        backgroundColor: '#FFFFFF',
      },
      marginRight: theme.spacing(2),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
      color: 'black',
    },
    searchbar: {
      width: '100%',
      minWidth: '30vw',
      height: '5vh',
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'black',
    },
    inputRoot: {
      color: 'inherit',
    },
    logout: {
      color: 'white',
      marginLeft: '3vw',
    },
    tabs: {
      flexGrow: 1,
      backgroundColor: '#482be7',
    },
    tabbar: {
      color: 'white',
    },
    tab: {
      height: '8vh',
    },
    appbar: {
      backgroundColor: '#482be7',
      margin: 0,
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '40ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    profileIcon: {
      fontSize: '1.6em',
    },
    logo: {
      width: 'auto',
      height: '10em',
      marginLeft: '2.3vw',
    },
    socialIcon: {
      fontSize: '2.6em',
      margin: '10px',
    },
    socialIcons: {
      marginRight: '60px',
    }
  }),
);

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#ffffff',
    },
  },
});

export const NavBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);
  const [value, setValue] = React.useState(0);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" elevation={0} className={classes.appbar}>
        <Toolbar>
          <img src="./currentLogoStacked.jpg"  className={classes.logo}/>
          <div className={classes.grow} />
          <div className={classes.socialIcons}>
            <InstagramIcon className={classes.socialIcon}/>
            <TwitterIcon className={classes.socialIcon}/>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
};