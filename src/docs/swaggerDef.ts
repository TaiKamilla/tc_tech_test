// import { version } from "../../package.json";
import config from "../config/config";

const swaggerDef = {
  openapi: "3.0.0",
  info: {
    title: "TODO service API documentation",
    version: "1.0.0",
    license: {
      name: "MIT",
      url: "https://github.com/TaiKamilla/tc_tech_test",
    },
  },
  servers: [
    {
      url: `http://localhost:${config.port}/v1`
    },
  ],
};

export default swaggerDef;