import express from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import swaggerDefinition from "../../docs/swaggerDef";

const router = express.Router();

const options = swaggerJsdoc ({
  swaggerDefinition,
  apis: ['src/docs/*.yml', 'src/routes/v1/*.ts'],
});

router.use("/", swaggerUi.serve);

router.get("/", swaggerUi.setup(options, { explorer: true }));

export default router;