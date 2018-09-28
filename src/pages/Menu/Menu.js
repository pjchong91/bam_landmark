import React from 'react';
import styles from './styles';
import CityBanner from './../../assets/images/hero-banner.jpg';

const Menu = () => {
  return (
    <div
      style={{
        ...styles.container,
        backgroundImage: ` linear-gradient(to right, rgba(0,0,0,0.3), rgba(0,0,0,0.3)),url(${CityBanner})`,
      }}
    >
      <ul style={styles.list}>
        <li>Home</li>
        <li>Only One Robson</li>
        <li>270° views</li>
        <li>Refined Residences</li>
        <li>Club Robson, Lifestyle Concierge Services</li>
        <li>Award-Winning Team</li>
        <li>Media</li>
        <li>Register</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Menu;
