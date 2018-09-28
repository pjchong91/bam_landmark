import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import { MenuProvider } from './context/MenuContext';
import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';

const App = () => {
  return (
    <ParallaxProvider>
      <MenuProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </MenuProvider>
    </ParallaxProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
