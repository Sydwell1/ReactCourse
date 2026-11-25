import React, { Component } from 'react';
// import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import * as firebase from 'firebase';

// Book section 9.2: this proves Firebase is added correctly.
// Open the browser console (F12): you should see the firebase object printed.
class App extends Component {
  constructor() {
    super();
    console.log(firebase);
  }
  render() {
    return (
      <div>
        <h1>React CRUD with Firebase</h1>
      </div>
    );
  }
}
export default App;
