'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

try {
  sequelize
    .authenticate()
    .then((r) =>
      console.log(
        'INFO: Connection to database has been established successfully.'
      )
    );
} catch (err) {
  console.log('ERROR: Unable to connect to the database - ', err);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.users = require('./user.js')(sequelize, Sequelize);
db.employees = require('./employee.js')(sequelize, Sequelize);
db.assets = require('./assets.js')(sequelize, Sequelize);
db.assetcategories = require('./assetCategory.js')(sequelize, Sequelize);
db.stockViews = require('./stockViews.js')(sequelize, Sequelize);
db.assetIssue = require('./assetIssues.js')(sequelize, Sequelize);
db.returnAsset = require('./returnAsset.js')(sequelize, Sequelize);
db.scrapAsset = require('./scrapAsset.js')(sequelize, Sequelize);
db.assetHistories=require('./assetHistory.js')(sequelize, Sequelize)

module.exports = db;
