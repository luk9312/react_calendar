import React, { Component } from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import classnames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';

class Day extends Component {

  static defaultProps = {
    disabled: false,
    hidden: false,
    current: false,
    selected: false,
    isTitle: false,
  };

  render() {
    const {
      classes,
      children,
      disabled,
      hidden,
      current,
      selected,
      isTitle,
      ...other
    } = this.props;

    const className = classnames(classes.day, {
      [classes.hidden]: hidden,
      [classes.current]: current,
      [classes.selected]: selected,
      [classes.disabled]: disabled,
      [classes.isTitle]: isTitle,
    });

    let render;

    if (isTitle) {
      render = (<Title
                  className={className}
                  tabIndex={hidden || disabled ? -1 : 0}
                  {...other}
                > {children} </Title>)
    } else {
      render = (<Date
                  disabled={disabled}
                  className={className}
                  tabIndex={hidden || disabled ? -1 : 0}
                  {...other}
                > </Date>)
    }

    return render
  }
}

const Title = (props) => {
  const {className, tabIndex, children, ...other} = props;
  return (
    <IconButton
      variant="outlined"
      className={className}
      tabIndex={tabIndex}
      {...other}
    >
      {children}
    </IconButton>
  );
};

const Date = (props) => {
  const {className, tabIndex, children, onhandleClick, date, disabled, ...other} = props;
  let day = date.split('-')[2]
  return (
    <Paper
      onClick={() => onhandleClick(date)}
      variant="outlined"
      className={className}
      tabIndex={tabIndex}
      {...other}
    >
      {day}
      {
        !disabled ? 
          <Typography component="p" variant="caption" align="left">
            DETAIL
          </Typography> : null
      }
    </Paper>
  );
};

const styles = (theme) =>
  createStyles({
    day: {
      minHeight: 60,
      width: '13vw',
      height: '9vh',
      fontSize: theme.typography.caption.fontSize,
      marginTop: '0.5vh',
      marginButtom: '0.5vh',
      marginLeft: '0.2vw',
      marginRight: '0.2vw',
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightMedium,
    },
    hidden: {
      opacity: 0,
      pointerEvents: 'none',
    },
    current: {
      color: theme.palette.primary.main,
      fontWeight: 600,
    },
    selected: {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightMedium,
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
      },
    },
    disabled: {
      pointerEvents: 'none',
      color: theme.palette.text.hint,
    },
    isTitle: {
      margin: 0,
      padding:0,
    },
});

export default withStyles(styles)(Day);