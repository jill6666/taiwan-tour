import React, { memo, useState, useEffect } from 'react';
import { makeStyles, useMediaQuery } from '@material-ui/core';
import Train from '../Component/train.png';
import JioFeng from '../Component/jiofeng.png';
import Fest from '../Component/fest.png';
import Logo from '../Component/home_logo.png';
import LogoHov from '../Component/home_logo_hov.png';

const useStyles = makeStyles((theme) => ({
  train_img: {
    backgroundImage: ({ props }) => `url(${props})`,
    // 透明度 0.6 的黑色半透明遮罩
    backgroundColor: 'rgba(0, 0, 0, .4)',
    // 設置背景混和模式為相乘模式
    backgroundBlendMode: 'multiply',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo_text: {
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: '1rem'
  },
  logo: {
    backgroundImage: `url(${Logo})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    position: 'relative',
    minWidth: '200px',
    width: '400px',
    maxWidth: '400px',
    height: '250px',
    float: 'none',
    margin: '0 auto',
    textAlign: 'center',
    transition: 'all 0.1s ease-in-out',
    '&:hover': {
      backgroundImage: `url(${LogoHov})`,
    }
  },
  dots: {
    position: 'absolute',
    right: '1rem',
  },
  dot: {
    display: 'block',
    background: '#f3f3f3',
    borderRadius: '50%',
    width: '13px',
    height: '13px',
    border: '1px solid #fff',
    boxSizing: 'contain-box',
    marginTop: '16px',
  }
}))

const Home = () => {
  const [backgroundImage, setBGImage] = useState(Train);
  const desktop = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  const classes = useStyles({ props: backgroundImage });
  const imgs = [Train, JioFeng, Fest];
  const dotsArr = Array.from({ length: imgs.length });
  return (<>
    <div className={classes.wrap}>
      <div className={classes.train_img}>
        <div className={classes.logo_text}>
          <div className={classes.logo} />
          <h2 className={classes.title}>就想陪你，全台走Tour透</h2>
        </div>
        <div className={classes.dots}>
          {desktop && dotsArr.map((i, index) => {
            return (
              <div className={classes.dot} onClick={() => setBGImage(imgs[index])} />
            )
          })}
        </div>
      </div>
    </div>
  </>)
}
export default memo(Home);