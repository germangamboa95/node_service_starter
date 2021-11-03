import { Sequelize } from "sequelize-typescript";
import { Logger } from "./logger";
import { ApiServer } from "./server";

const boot = async () => {
  const sequelize = new Sequelize(process.env.DATABASE, {
    dialect: "postgres",
    models: [__dirname + "/models"],
    logging: process.env.NODE_ENV === "production" ? false : console.log,
    define: {
      underscored: true,
    },
  });

  console.log(sequelize.models);
  new ApiServer().start(Number(process.env.PORT));
};

boot().catch((err) => console.error(`Service failed to boot`, err));
