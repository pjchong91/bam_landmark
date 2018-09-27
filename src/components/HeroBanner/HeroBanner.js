import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.js";
import CityBanner from "./../../assets/images/hero-banner.jpg";
import Arrow from "./../../assets/images/arrow.png";

const HeroBanner = () => {
  return (
    <div style={{ ...styles.container, backgroundImage: `url(${CityBanner})` }}>
      <div style={styles.bannerText}>
        <h2 style={styles.subHeader}>Transforming Vancouver's</h2>
        <h1 style={styles.mainHeader}>Skyline</h1>
      </div>
      <div style={styles.scrollButton}>
        <div style={styles.divider} />
        <a>Scroll Down</a>
        <img src={Arrow} style={styles.arrow} />
      </div>
    </div>
  );
};

export default HeroBanner;
