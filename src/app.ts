import express from "express";
import helmet from "helmet";
import xss from "xss-clean";
import mongooseSanitize from "express-mongo-sanitize";
import compression from "compression";
import cors from "cors";
import routes from "./routes/v1";

const app = express();

// Parse JSON bodies
app.use(express.json());
// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Set security HTTP headers
app.use(helmet());
// Sanitize request data
app.use(xss());
app.use(mongooseSanitize());

// Compress response bodies
app.use(compression());
// Enable CORS
app.use(cors());
app.options("*", cors());

//log every request
// app.use((req, res, next) => {
//   console.log(req.method, req.url);
//   next();
// });

// Set up routes with version v1
app.use("/v1", routes);

//TODO
// Handle unhandled routes
// Handle all errors

export default app;
