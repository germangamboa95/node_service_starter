import { Sequelize } from "sequelize-typescript";
import { Logger } from "./logger";
import { ApiServer } from "./server";

const boot = async () => {
  if (process.env.DATABASE_URL) {
    const sequelize = new Sequelize(process.env.DATABASE_URL, {
      dialect: "mysql",
      models: [__dirname + "/models"],
      logging: process.env.NODE_ENV === "production" ? false : console.log,
      define: {
        underscored: true,
      },
    });
  }

  new ApiServer().start(Number(process.env.PORT ?? 3000));
};

boot().catch((err) => console.error(`Service failed to boot`, err));
