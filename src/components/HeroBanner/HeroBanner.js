import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.js';
import CityBanner from './../../assets/images/hero-banner.jpg';
import Arrow from './../../assets/images/arrow.png';
import { withStyles } from '@material-ui/core';

import { CSSTransition } from 'react-transition-group';

const HeroBanner = ({ classes }) => {
  return (
    <div
      className={classes.container}
      style={{ backgroundImage: `url(${CityBanner})` }}
    >
      <div className={classes.bannerText}>
        <CSSTransition in={true} appear={true} timeout={2000} classNames="fade">
          <h2 className={classes.subHeader}>Transforming Vancouver's</h2>
        </CSSTransition>
        <CSSTransition in={true} appear={true} timeout={3000} classNames="fade">
          <h1 className={classes.mainHeader}>Skyline</h1>
        </CSSTransition>
      </div>
      <div className={classes.scrollButton}>
        <div className={classes.divider} />
        <a>Scroll Down</a>
        <img src={Arrow} className={classes.arrow} />
      </div>
    </div>
  );
};

export default withStyles(styles)(HeroBanner);
