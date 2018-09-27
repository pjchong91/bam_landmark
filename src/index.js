import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import registerServiceWorker from "./registerServiceWorker";
import { MenuProvider } from "./context/MenuContext";

const App = () => {
  return (
    <MenuProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </MenuProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
