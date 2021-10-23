import express from "express";
import { Server } from "@overnightjs/core";
import { controllers } from "./controllers";
import { Logger } from "./logger";
import morgan from "morgan";
import hbs from "express-handlebars";
import path from "path";

export class ApiServer extends Server {
  constructor() {
    super(process.env.NODE_ENV === "development"); // setting showLogs to true

    this.app.engine("handlebars", hbs());
    this.app.set("view engine", "handlebars");

    this.app.set("views", __dirname + "/views");

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(
      morgan("combined", {
        stream: {
          write: function (message: string) {
            Logger.info(message);
          },
        },
      })
    );

    this.setupControllers();
  }

  private setupControllers(): void {
    super.addControllers(controllers);
  }

  public start(port: number): void {
    this.app.listen(port, () => {
      Logger.info("Server listening on port: " + port);
    });
  }
}
