import React from 'react';
import './App.css';

import Main from './react-components/Main';
import { Route, Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import ImageInput from './react-components/views/ImageInput'; //to get descriptors; not used in interface

import Carousel from './react-components/Carousel';
import Twitter from './react-components/Twitter';
import Commute from './react-components/Commute';
import News from './react-components/News';
import Weather from './react-components/Weather';

function App() {
  return (
    <div className="App">
      <Router history={createHistory()}>
        <div className="route">
          <Route exact path="/" component={props => <Main {...props} />} />
          <Route
            exact
            path="/photo"
            component={props => <ImageInput {...props} />}
          />
          <Route exact path="/news" component={props => <News {...props} />} />
          <Route
            exact
            path="/carousel"
            component={props => <Carousel {...props} />}
          />
          <Route
            exact
            path="/twitter"
            component={props => <Twitter {...props} />}
          />
          <Route
            exact
            path="/weather"
            component={props => <Weather {...props} />}
          />
          <Route
            exact
            path="/commute"
            component={props => <Commute {...props} />}
          />
        </div>
      </Router>
    </div>
  );
}

export default App;
