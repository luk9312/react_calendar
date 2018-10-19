import React, { Component } from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import classnames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';

import IconButton from '@material-ui/core/IconButton';

class Day extends Component {

  static defaultProps = {
    disabled: false,
    hidden: false,
    current: false,
    selected: false,
  };

  render() {
    const {
      children,
      classes,
      disabled,
      hidden,
      current,
      selected,
      ...other
    } = this.props;

    const className = classnames(classes.day, {
      [classes.hidden]: hidden,
      [classes.current]: current,
      [classes.selected]: selected,
      [classes.disabled]: disabled,
    });

    return (
      <IconButton
        variant="outlined"
        className={className}
        tabIndex={hidden || disabled ? -1 : 0}
        {...other}
      >
        {children}
      </IconButton>
    )
  }
}

const styles = (theme) =>
  createStyles({
    day: {
      width: 36,
      height: 36,
      fontSize: theme.typography.caption.fontSize,
      marginTop: '3vh',
      marginBottom: '3vh',
      marginLeft: '1vw',
      marginRight: '1vw',
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightMedium,
      padding: 0,
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
});

export default withStyles(styles)(Day);