import winston from "winston";

export const Logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [],
});

if (process.env.NODE_ENV !== "production") {
  Logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
} else {
  Logger.add(
    new winston.transports.File({ filename: "error.log", level: "error" })
  );
  Logger.add(new winston.transports.File({ filename: "combined.log" }));
}
