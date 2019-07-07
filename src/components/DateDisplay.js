import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';

const DateDisplay = (() => (
  <Paper className="container">
      <List>
          <ListItem>
          <ListItemText>Day: </ListItemText>
      </ListItem>
      <ListItem>
          <ListItemText>Month: </ListItemText>
      </ListItem>
      <ListItem>
          <ListItemText>Year: </ListItemText>
      </ListItem>
      </List>
  </Paper>
));

DateDisplay.propTypes = {
  apiResponse: PropTypes.string
}

export default DateDisplay;