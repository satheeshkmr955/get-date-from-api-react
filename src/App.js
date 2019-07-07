import React, { Component } from "react";
import API from "./services/dateAPI";
import DateButton from "./components/DateButton";
import DateDisplay from "./components/DateDisplay";

class App extends Component {
  constructor() {
    super();
    this.state = {
      apiResponse: ""
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick = () => {
    API.getAPIResponse().then(res => {
      this.setState({ apiResponse: res });
    });
  };

  render() {
    return (
      <div>
        <center>
          <h1>Date API</h1>
        </center>
        <center>
          <DateButton onClickButton={this.handleButtonClick} />
        </center>
        <DateDisplay apiResponse={this.state.apiResponse} />
      </div>
    );
  }
}

export default App;
