import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div>
        <Grid container alignItems="center">
          <Grid item xs={12} className="header">
            <Typography variant="title" align="center">
              Staff Duty Management System (SDMS)
              <br />
              職員更份管理系統
            </Typography>
            
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Header;