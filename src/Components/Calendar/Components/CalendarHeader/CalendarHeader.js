import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import LeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import RightIcon from '@material-ui/icons/KeyboardArrowRight';
import Typography from '@material-ui/core/Typography';

function CalendarHeader(props) {
  const {handlePrevious, handleForward, year, month} = props
  return (
    <Grid container item xs={12} spacing={16} justify="center" alignItems="center">
      <Grid item>
        <IconButton aria-label="Left" onClick={() => handlePrevious(year, month)}>
          <LeftIcon fontSize="large" />
        </IconButton>
      </Grid>
      <Grid item>
        <Typography variant="h6" align="center">
          {`${year}-${month}`}
        </Typography>
      </Grid>
      <Grid item>
        <IconButton aria-label="Right" onClick={() => handleForward(year, month)}>
          <RightIcon fontSize="large" />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default CalendarHeader;