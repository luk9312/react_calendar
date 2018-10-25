import React, { Component, Fragment } from 'react';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CalendarHeader from './Components/CalendarHeader/CalendarHeader'
import CalendarBody from './Components/CalendarBody/CalendarBody'

import {Redirect}from 'react-router-dom';


class Calendar extends Component {
  render() {
    const {isSelected, selectedDate, onClick, property, monthPrevious, monthForward} = this.props;
    const {year, month} = property;
    if (isSelected) {
      return (<Redirect to={`/${selectedDate.split('-').join('')}`} />)
    }
    return (
      <Fragment>
        <Grid container>
          <CalendarHeader
            year={year}
            month={month}
            handlePrevious={monthPrevious}
            handleForward={monthForward}
          />
          <CalendarBody
            year={year}
            month={month}
            onhandleClick={onClick}
          />
        </Grid>
      </Fragment>
    );
  }
}


export default Calendar;