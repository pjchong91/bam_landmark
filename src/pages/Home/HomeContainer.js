import Home from './Home.js';
import React from 'react';
import { MenuContext } from './../../context/MenuContext.js';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MenuContext.Consumer>
        {values => <Home values={values} />}
      </MenuContext.Consumer>
    );
  }
}

export default HomeContainer;
