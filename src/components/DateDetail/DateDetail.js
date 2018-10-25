import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Redirect } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

class DateDetail extends Component {
  render() {
    const { isSelected, classes, selectedDate, onClick } = this.props;
    if (!isSelected) {
      return(<Redirect to='/'/>)
    }
    return (
      <Card className={classes.card}>
        <CardHeader 
          title={selectedDate}
          action={
            <Button>
              Add
            </Button>
          } />
        <CardContent>
          <Typography variant="h6">
            Detail:
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={onClick}>
            Back
          </Button>
        </CardActions>
      </Card>
    );
  }
}

const styles = () => ({
  card: {
    marginTop:'5vh',
  },
} )


export default withStyles(styles)(DateDetail);