import React from 'react';
import moment from 'moment';
import Day from '../Day/Day';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

function generateWeek ({year, month}) {
  let monthStart = moment(`${year}-${month}-1`, "YYYY-MM-DD");
  let currentDate = monthStart.clone().subtract(monthStart.day(), 'day');
  let result = [];
  for (let i=0; i<6; i++) {
    let week= [];
    for (let j=0; j<7; j++) {
      week.push(currentDate.format("YYYY-MM-DD"))
      currentDate.add(1, 'day');
    };
    result.push(week);
    week = [];
  };
  return result;
};

function renderDate (dates, onhandleClick) {
  let currentDate = moment().format("YYYY-MM-DD");
  return (
    dates.map (date => {
      return (
        <Grid item key={date}>
          <Day
            date={date}
            onhandleClick={onhandleClick}
            disabled={date < currentDate} 
            current={date === currentDate}/>
        </Grid>
      );
    })
  );
};

function CalendarBody (props) {
  const {classes, onhandleClick, ...others} = props
  const weekname = ['Su','Mo','Tu','We','Th','Fr','Sa']
  let weeks = generateWeek(others);
  let weeknum = 0;
  return (
    <Grid container item xs={12} className={classes.root}>
      <Grid key={weeknum} container item xs={12} justify="center">
        {weekname.map(name => {
          return(
            <Day key={name} disabled={true} isTitle={true}>
              {name}
            </Day>
          )
        })}
      </Grid>
      {weeks.map(week => {
        weeknum ++;
        return (
          <Grid key={weeknum} container item xs={12} justify="center">
            {renderDate(week, onhandleClick)}
          </Grid>
        );
      })}
    </Grid>
  )
};

const styles = () => ({
  root : {
    marginTop: '-15px'
  }
})

export default withStyles(styles)(CalendarBody);