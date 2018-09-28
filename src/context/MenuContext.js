import React from 'react';

export const MenuContext = React.createContext();

export class MenuProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuToggled: false,
    };
  }

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
