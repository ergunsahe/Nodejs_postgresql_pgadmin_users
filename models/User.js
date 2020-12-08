// ORM table
const { Sequelize, DataTypes } = require("sequelize");



const { DB_USERNAME, DB_PASSWORD, DB_HOSTNAME, DB_PORT, DB_NAME } = process.env;
const sequelize = new Sequelize(
  `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}:${DB_PORT}/${DB_NAME}`
);
sequelize
.authenticate()
.then(() =>console.log("succes"))
.catch((err) =>console.log(err))

// modelname, attribute options
const userModel = sequelize.define(
    "recruiter",
    {
        // attributes (id, firstName, lastName, createdAt, updatedAt)
        firstName: {
            type: DataTypes.STRING
        },
        lastName: {
            type: DataTypes.STRING
        }
    },
    {
        // options
        // freezeTableName: true
    }
)

module.exports = userModel;