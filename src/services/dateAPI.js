import axios from "axios";
const DATE_JSON_URL = "https://jsonmock.hackerrank.com/datetime";

export default {
  getAPIResponse() {
    return axios
      .get(DATE_JSON_URL)
      .then(function(res) {
        return res.data.date;
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};
