import { ApiServer } from "./server";

const boot = async () => {
  new ApiServer().start(Number(process.env.PORT));
};

boot().catch((err) => console.error(`Service failed to boot`, err));
