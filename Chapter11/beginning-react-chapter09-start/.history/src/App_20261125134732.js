import React, { Component } from 'react';
import User from './User';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import React, { Component } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={User} />
              <Route path="/*" component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

class NotFound extends Component {
  render() {
    return <div>Not Found</div>
  }
}

export default App;