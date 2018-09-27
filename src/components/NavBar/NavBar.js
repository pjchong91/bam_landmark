import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.js";
import Logo from "./../../assets/images/landmarkLogo.svg";
import { Squeeze } from "react-burgers";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }

  _toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu });
    console.log("ok!");
  }

  render() {
    return (
      <div style={styles.container}>
        <Link to="/" style={styles.logoContainer}>
          <img src={Logo} style={styles.logo} />
        </Link>
        <div style={styles.rightNav}>
          <div style={styles.rightButtons}>
            <a style={{ ...styles.link, ...styles.active }}>En</a>
            <a style={styles.link}>繁體</a>
            <a style={styles.link}>简体</a>
            <a style={{ ...styles.link, ...styles.mobileHidden }}>Register</a>
          </div>
          <Squeeze
            color="#fff"
            lineHeight={2}
            width={35}
            onClick={() => this._toggleMenu()}
          />
        </div>
      </div>
    );
  }
}

export default NavBar;
