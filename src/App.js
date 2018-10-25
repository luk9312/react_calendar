import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux'
import Calendar from './containers/Calendar';
import Detail from './containers/Detail';

import { getMonth } from './actions';

const mapDispatchToProps = (dispatch, ownProps) => ({
  getMonth: () => dispatch(getMonth()),
})

class App extends Component {
  componentDidMount() {
    this.props.getMonth()
  };
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Calendar} />
            <Route path="/:date" component={Detail} />
          </Switch>
        </div>
      </Router>
    );
  }
}

  
export default connect(
  null,
  mapDispatchToProps
)(App);
