import React from "react";
import styles from "./styles";
import HeroBanner from "./../../components/HeroBanner";
import LogoWhite from "./../../assets/images/landmarkLogoWhite.svg";
import Apartment from "./../../assets/images/apartment.jpg";
import Feature from "./../../components/Feature";
import Residences from "./../../assets/images/residences.jpg";

const mockData = [
  {
    subHeader: "Refined",
    header: "Residences",
    button: "Discover the Residences",
    imageurl: Residences
  }
];

const Home = () => {
  return (
    <div style={styles.container}>
      <HeroBanner />
      <div style={styles.landmarkLife}>
        <p style={styles.subHeader}>A Landmark</p>
        <div style={styles.life}>
          <h1 style={styles.lifeLetter}>L</h1>
          <h1 style={styles.lifeLetter}>I</h1>
          <h1 style={styles.lifeLetter}>F</h1>
          <h1 style={styles.lifeLetter}>E</h1>
        </div>
      </div>{" "}
      {/*End of landmarkLife*/}
      <div style={styles.apartment}>
        <img src={Apartment} style={styles.apartmentImage} />
      </div>
      <div style={styles.landmarkFeature}>
        <p style={styles.subTitle}>This is</p>
        <img src={LogoWhite} style={styles.logo} />
        <p style={styles.subHeaderBold}>Watch the Film ►</p>
      </div>
      {mockData.map((item, index) => (
        <Feature item={item} key={item.index} />
      ))}
    </div>
  );
};

export default Home;
