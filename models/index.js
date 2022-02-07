const { Sequelize, DataTypes } = require('sequelize');

let sequelize = null;
if (process && process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
      useUTC: false,
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  });
} else {
  sequelize = new Sequelize({
    database: process.env.DATABASE,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    dialect: process.env.DIALECT,
    host: process.env.HOST,
  });
}

sequelize
  .authenticate()
  .then(() => {
    console.log('Successfully connected to the RDS for CDs.');
  })
  .catch(error => {
    console.error('RDS connection error:', error);
  });

const db = {};

db.sequelize = sequelize;

db.Users = require('./userModel')(sequelize, DataTypes);
db.Certificates = require('./certificateModel')(sequelize, DataTypes);

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log('Successfully synced database with Sequelize.');
  })
  .catch(error => {
    console.error('Sequelize sync error:', error);
  });

module.exports = db;
