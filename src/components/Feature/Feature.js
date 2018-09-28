import React from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core';

const feature = ({ item, classes }) => {
  return (
    <div
      className={`${classes.container} `}
      // style={{ backgroundImage: `url("${item.imageurl}")` }}
    >
      <div className={classes.imageContainer}>
        <img className={classes.image} src={item.imageurl} />
      </div>
      <div className={classes.featureText}>
        <p className={classes.subHeader}>{item.subHeader}</p>
        <span className={classes.header}>{item.header}</span>
        <a className={classes.button}>{item.button} </a>
      </div>
    </div>
  );
};

export default withStyles(styles)(feature);
