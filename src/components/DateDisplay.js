import React from "react";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";

const DateDisplay = props => (
  <Paper className="container">
    <List>
      <ListItem>
        <ListItemText>
          Day: {props.apiResponse ? new Date(props.apiResponse).getDate() : ""}
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          Month:{" "}
          {props.apiResponse ? new Date(props.apiResponse).getMonth() : ""}
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          Year:{" "}
          {props.apiResponse ? new Date(props.apiResponse).getFullYear() : ""}
        </ListItemText>
      </ListItem>
    </List>
  </Paper>
);

DateDisplay.propTypes = {
  apiResponse: PropTypes.string
};

export default DateDisplay;
