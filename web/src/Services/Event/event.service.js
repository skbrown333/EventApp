const axios = require("axios");
const Constants = require("../../Constants/constants");

class EventService {
  getAll() {
    return new Promise((resolve, reject) => {
      axios.get(Constants.routes.event.getAll).then(res => {
        resolve(res.data);
      });
    });
  }
  getById(accountID) {
    console.log(Constants.routes.event.getAll + "/" + accountID);
    return new Promise((resolve, reject) => {
      axios.get(Constants.routes.event.getAll + "/" + accountID).then(res => {
        console.log(res);
        resolve(res.data);
      });
    });
  }
}

export default new EventService();
