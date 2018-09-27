import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.js";
import Logo from "./../../assets/images/landmarkLogo.svg";
import { Squeeze } from "react-burgers";
import { withStyles } from "@material-ui/core";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }

  // _toggleMenu() {
  //   this.setState({ showMenu: !this.state.showMenu });
  // }

  render() {
    console.log(this.props);
    return (
      <div className={this.props.classes.container}>
        <Link to="/" className={this.props.classes.logoContainer}>
          <img src={Logo} className={this.props.classes.logo} />
        </Link>
        <div className={this.props.classes.rightNav}>
          <div className={this.props.classes.rightButtons}>
            <a
              className={`${this.props.classes.link} ${
                this.props.classes.active
              }`}
            >
              En
            </a>
            <a className={this.props.classes.link}>繁體</a>
            <a className={this.props.classes.link}>简体</a>
            <a
              className={`${this.props.classes.link} ${
                this.props.classes.mobileHidden
              }`}
            >
              Register
            </a>
          </div>
          <Squeeze
            color="#fff"
            lineHeight={2}
            width={35}
            onClick={() => this.props.value.toggleMenu()}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);
