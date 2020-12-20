import React from "react";
import './App.css';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./store";

import AppHeader from "./components/AppHeader";
import AppContainer from "./components/AppContainer";
import DetailsContainer from "./components/DetailsContainer";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <AppHeader />
          <Route exact path="/" component={AppContainer} />
          <Route exact path="/details/:name" component={DetailsContainer} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;