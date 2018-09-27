import React from "react";
import styles from "./styles";

const feature = ({ item }) => {
  return (
    <div
      style={{
        ...styles.container,
        backgroundImage: `url("${item.imageurl}")`
      }}
    >
      <p style={styles.subHeader}>{item.subHeader}</p>
      <span style={styles.header}>{item.header}</span>
      <a style={styles.button}>{item.button} </a>
    </div>
  );
};

export default feature;
