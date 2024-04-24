import { Sequelize } from "sequelize";
const config = {
  HOST: "localhost",
  USER: "iman",
  PASSWORD: "1",
  DB: "todos_app",
  DIALECT: "mysql",
};

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: "mysql",
});

export default sequelize;
