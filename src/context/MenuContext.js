import React from 'react';

export const MenuContext = React.createContext();

export class MenuProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuToggled: false,
      width: window.innerWidth,
    };
  }

  // Resource for window resizing https://goshakkk.name/different-mobile-desktop-tablet-layouts-react/

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  _toggleMenu = () => {
    let menuToggled = !this.state.menuToggled;
    this.setState({ menuToggled });
  };
  render() {
    return (
      <MenuContext.Provider
        value={{ ...this.state, toggleMenu: this._toggleMenu }}
      >
        {this.props.children}
      </MenuContext.Provider>
    );
  }
}
