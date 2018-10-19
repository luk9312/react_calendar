import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import LeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import RightIcon from '@material-ui/icons/KeyboardArrowRight';
import Typography from '@material-ui/core/Typography';

function CalendarHeader(props) {
  return (
    <Grid container item xs={12} spacing={16} justify="center" alignItems="center">
      <Grid item>
        <IconButton aria-label="Left" onClick={props.handlePrevious}>
          <LeftIcon fontSize="large" />
        </IconButton>
      </Grid>
      <Grid item>
        <Typography variant="h6" align="center">
          {`${props.year}-${props.month}`}
        </Typography>
      </Grid>
      <Grid item>
        <IconButton aria-label="Right" onClick={props.handleForward}>
          <RightIcon fontSize="large" />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default CalendarHeader;