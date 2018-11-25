const express = require("express");
const swaggerJSDoc = require("swagger-jsdoc");

const port = process.env.PORT || 3000;
const app = express();

/**
 * @swagger
 *
 * /:
 *   get:
 *     operationId: open
 *     summary: Open
 *     responses:
 *       '200':
 *         description: |-
 *           200 response
 */
app.get("/", () => {});

/**
 * @swagger
 *
 * /v2:
 *   get:
 *     operationId: secured
 *     summary: Secured
 *     security:
 *     - ApiKeyAuth: []
 *     responses:
 *       '200':
 *         description: |-
 *           200 response
 */
app.get("/secured", () => {});

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Secured API",
    version: "1.0.0"
  }
};

const options = {
  swaggerDefinition,
  apis: ["./*.js", "./components.yaml"]
};

const swaggerSpec = swaggerJSDoc(options);

app.get("/api-docs.json", (req, res) => {
  res.send(swaggerSpec);
});

app.listen(port, () => console.log(`http://localhost:${port}`));
