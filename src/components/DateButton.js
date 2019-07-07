import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

const DateButton = props => (
  <div className="button-container">
    <Button variant="extendedFab" onClick={props.onClickButton} color="primary">
      DISPLAY DATE
    </Button>
  </div>
);

DateButton.propTypes = {
  onClickButton: PropTypes.func
};

export default DateButton;
