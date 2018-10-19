import React from 'react';
import moment from 'moment';
import Day from '../Day/Day';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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

function renderDate (dates) {
  let currentDate = moment().format("YYYY-MM-DD");
  console.log(currentDate);
  return (
    dates.map (date => {
      let day = date.split('-')[2]
      return (
        <Grid item key={date}>
          <Day
            disabled={date < currentDate} 
            current={date === currentDate}>
            {day}
          </Day>
        </Grid>
      );
    })
  );
};

function CalendarBody (props) {
  const weekname = ['Su','Mo','Tu','We','Th','Fr','Sa']
  let weeks = generateWeek(props);
  let weeknum = 0;
  return (
    <Grid container item xs={12}>
      <Grid key={weeknum} container item xs={12} justify="center">
        {weekname.map(name => {
          return(
            <Day key={name} disabled={true}>
              {name}
            </Day>
          )
        })}
      </Grid>
      {weeks.map(week => {
        weeknum ++;
        return (
          <Grid key={weeknum} container item xs={12} justify="center">
            {renderDate(week)}
          </Grid>
        );
      })}
    </Grid>
  )
};

export default CalendarBody;