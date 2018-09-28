import React from 'react';
import styles from './styles';
import HeroBanner from './../../components/HeroBanner';
import LogoWhite from './../../assets/images/landmarkLogoWhite.svg';
import Apartment from './../../assets/images/apartment.jpg';
import Feature from './../../components/Feature';
import Residences from './../../assets/images/residences.jpg';
import { withStyles } from '@material-ui/core';
import { Parallax } from 'react-scroll-parallax';

const mockData = [
  {
    subHeader: 'Refined',
    header: 'Residences',
    button: 'Discover the Residences',
    imageurl: Residences,
  },
];

const renderFeatureItem = () => {
  return mockData.map((item, index) => (
    <Feature item={item} key={item.index} />
  ));
};

const Home = ({ classes, values }) => {
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
      {values.width > 960 ? (
        <Parallax
          className="custom-class"
          offsetYMax={20}
          offsetYMin={-5}
          slowerScrollRate
          tag="figure"
        >
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
          <Parallax
            className="custom-class"
            offsetYMax={20}
            offsetYMin={-5}
            slowerScrollRate
            tag="figure"
          >
            {renderFeatureItem()}
          </Parallax>
        </Parallax>
      ) : (
        <React.Fragment>
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
          {renderFeatureItem()}
        </React.Fragment>
      )}
    </div>
  );
};

export default withStyles(styles)(Home);
