import mongoose from "mongoose";
import app from "./app";
import config from "./config/config";

mongoose
  .connect(config.mongoose.uri)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(config.port, () => {
      console.log(`Listening on port ${config.port}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
