import React, { Component } from 'react';
import { Layout } from './common/Layout';
import { ReviewsList } from './reviews';

class App extends Component {
  render() {
    return (
      <div className="App">
        {Layout(ReviewsList)}
      </div>
    );
  }
}

export default App;
