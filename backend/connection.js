const { Sequelize } = require("sequelize");
const database = "chatDB";
const sequelize = new Sequelize(database, "avinashrao", "postgres", {
  host: "localhost",
  dialect: "postgres",
});
const connectToDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to" + database);
  } catch (e) {
    console.log(e);
  }
};
module.exports = connectToDb;
module.exports.sequelize = sequelize;
