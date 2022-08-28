'use strict';

import { Sequelize } from "sequelize";
const env = process.env.NODE_ENV || 'development'
const config = require('../config/config')[env];

let sequelize: Sequelize;
if (config.url) {
  sequelize = new Sequelize(config.url, config);
  console.log('using env file..');
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

export default sequelize;
