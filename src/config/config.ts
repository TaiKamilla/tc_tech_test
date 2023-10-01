import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(__dirname, "../../../.env") });

export default {
  port: process.env.PORT,
  mongoose: {
    uri:
      process.env.MONGO_URI,
  },
  labelsServiceUrl: process.env.LABELS_ENDPOINT,
};
