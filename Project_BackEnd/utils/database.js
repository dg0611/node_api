import { Sequelize, Sequelize } from "sequelize";

const sequelize = new Sequelize("api_node", "root", "1234", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
  define: {
    timestamps: false,
  },
});

export default sequelize;
