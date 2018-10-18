import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Calendar from './Components/Calendar/Calendar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="App-header">
        </Header>
        <Calendar>
        </Calendar>
      </div>
    );
  }
}

export default App;
