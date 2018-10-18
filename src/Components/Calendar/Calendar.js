import React, { Component } from 'react';
import Day from './Components/Day/Day';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

class Carlendar extends Component {
  constructor(){
    super()
    this.state = {
      year: 2018,
      month: 10
    }
  }
  generateWeek = () => {
    let monthStart = moment(`${this.state.year}-${this.state.month}-1`, "YYYY MM DD");
    let currentDate = monthStart.clone().subtract(monthStart.day(), 'day');
    let result = [];
    for (let i=0; i<5; i++) {
      let week= [];
      for (let j=0; j<7; j++) {
        week.push(currentDate)
        currentDate.add(1, 'day');
      };
      result.push(week);
      week = [];
    };
    return result;
  };
  
  renderWeek = () => {
    let weeks = this.generateWeek();
    weeks.map(listOfDates => {
      return (
        <div>
          {this.renderDate(listOfDates)}
        </div>
      )
    })
  };
  
  renderDate = (dates) => {
    dates.map(date => {
      return (
        <div>
          {date}
        </div>
      );
    })
  };

  render() {
    
    return (
      <Paper>
        <Typography variant="h6" align="center">
          {`${this.state.year}-${this.state.month}`}
        </Typography>
        <div>
          {this.renderWeek()}
        </div>
      </Paper>
    );
  }
}


export default Carlendar;