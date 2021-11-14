import React, {
  memo,
  useEffect,
  useState,
} from 'react';
import {
  useMediaQuery,
  useEventCallback,
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Tab_spot from '../Component/tab_spot.png';
import Tab_spot_hov from '../Component/tab_spot_hov.png';
import Tab_rest from '../Component/tab_rest.png';
import Tab_rest_hov from '../Component/tab_rest_hov.png';
import Tab_activity from '../Component/tab_activity.png';
import Tab_activity_hov from '../Component/tab_activity_hov.png';


const useStyles = makeStyles((theme) => ({
  tab_spot: {
    backgroundImage: `url(${Tab_spot})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    width: '60px',
    height: '110px',
    '&:hover': {
      backgroundImage: `url(${Tab_spot_hov})`,
    }
  },
  tab_rest: {
    backgroundImage: `url(${Tab_rest})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    width: '60px',
    height: '110px',
    '&:hover': {
      backgroundImage: `url(${Tab_rest_hov})`,
    }
  },
  tab_activity: {
    backgroundImage: `url(${Tab_activity})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    width: '60px',
    height: '110px',
    '&:hover': {
      backgroundImage: `url(${Tab_activity_hov})`,
    }
  },
  tabs: {
    position: 'absolute',
    right: '1rem',
    display: 'flex'
  },
  tab: {
    width: '60px',
  }
}))
const Appbar = () => {
  const classes = useStyles();
  const desktop = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  const [isOpen, setIsOpen] = useState(true);
  const close = useEventCallback(() => setIsOpen(false));
  useEffect(() => {
    if (!desktop) close();
    else setIsOpen(true)
  }, [close, desktop]);
  console.log(desktop)
  return (
    <div className={classes.tabs}>
      {isOpen && (
        <div onClick={() => { if (!desktop) setIsOpen(!isOpen) }} className={classes.tabs}>
          <NavLink to="/scenicspot">
            <div className={classes.tab_spot} />
          </NavLink>
          <NavLink to="/restaurant">
            <div className={classes.tab_rest} />
          </NavLink>
          <NavLink to="/activity">
            <div className={classes.tab_activity} />
          </NavLink>
        </div>)}
      {!desktop && !isOpen && (
        <img
          src="images/burger.png"
          alt="menu"
          className={classes.tab}
          onClick={() => setIsOpen(!isOpen)}
        />
      )}
    </div>
  );
};

export default memo(Appbar);