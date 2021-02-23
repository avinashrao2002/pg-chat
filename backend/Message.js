const { DataTypes } = require("sequelize");
const { sequelize } = require("./connection");
const Message = sequelize.define("Message", {
  body: {
    type: DataTypes.STRING,
  },
  sentby: {
    type: DataTypes.INTEGER
  },
  receivedby: {
    type: DataTypes.INTEGER
  }
  //Implement ID eventually
});

module.exports = Message;
