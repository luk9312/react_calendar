import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import CalendarHeader from './Components/CalendarHeader/CalendarHeader'
import CalendarBody from './Components/CalendarBody/CalendarBody'

import withStyles from '@material-ui/core/styles/withStyles';

class Carlendar extends Component {
  constructor(){
    super()
    this.state = {
      year: moment().year(),
      month: moment().month()+1
    }
  };

  monthPrevious = () => {
    let {year, month} = this.state;
    month --;
    if (month === 0) {
      month = 12;
      year --;
    }
    this.setState({year, month})
  };

  monthForward = () => {
    let {year, month} = this.state;
    month ++;
    if (month === 13) {
      month = 1;
      year ++;
    }
    this.setState({year, month})
  };

  render() {
    const { classes } = this.props
    return (
      <Paper className={classes.root}>
        <Grid container direction="column">
          <CalendarHeader
            year={this.state.year}
            month={this.state.month}
            handlePrevious={this.monthPrevious}
            handleForward={this.monthForward}
          />

          <CalendarBody
             year={this.state.year}
             month={this.state.month}
          />
        </Grid>
      </Paper>
    );
  }
}

const styles = () => ({
  root: {
    marginTop: 10
  }
});

export default withStyles(styles)(Carlendar);