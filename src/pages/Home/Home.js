import React from 'react';
import styles from './styles';
import HeroBanner from './../../components/HeroBanner';
import LogoWhite from './../../assets/images/landmarkLogoWhite.svg';
import Apartment from './../../assets/images/apartment.jpg';
import Feature from './../../components/Feature';
import Residences from './../../assets/images/residences.jpg';
import { withStyles } from '@material-ui/core';

const mockData = [
  {
    subHeader: 'Refined',
    header: 'Residences',
    button: 'Discover the Residences',
    imageurl: Residences,
  },
];

const Home = ({ classes }) => {
  return (
    <div className={classes.container}>
      <HeroBanner />
      <div className={classes.landmarkLife}>
        <p className={classes.subHeader}>A Landmark</p>
        <div className={classes.life}>
          <h1 className={classes.lifeLetter}>L</h1>
          <h1 className={classes.lifeLetter}>I</h1>
          <h1 className={classes.lifeLetter}>F</h1>
          <h1 className={classes.lifeLetter}>E</h1>
        </div>
      </div>{' '}
      {/*End of landmarkLife*/}
      <div className={classes.landmarkCard}>
        <div className={classes.apartment}>
          <img src={Apartment} className={classes.apartmentImage} />
        </div>
        <div className={classes.landmarkFeature}>
          <p className={classes.subTitle}>This is</p>
          <img src={LogoWhite} className={classes.logo} />
          <p className={classes.subHeaderBold}>Watch the Film ►</p>
        </div>
      </div>
      {mockData.map((item, index) => (
        <Feature item={item} key={item.index} />
      ))}
    </div>
  );
};

export default withStyles(styles)(Home);
