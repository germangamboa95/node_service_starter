import { Sequelize } from "sequelize-typescript";
import { Logger } from "./logger";
import { ApiServer } from "./server";

const boot = async () => {
  const sequelize = new Sequelize({
    database: process.env.DATABASE,
    dialect: "postgres",
    models: [__dirname + "/models"],
    logging: (sql, timing) => Logger.info(sql),
  });

  console.log(sequelize.models);
  new ApiServer().start(Number(process.env.PORT));
};

boot().catch((err) => console.error(`Service failed to boot`, err));
