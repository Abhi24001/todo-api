const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Todo API",
      version: "1.0.0",
      description: "Todo API with JWT Authentication"
    },
    servers: [
      {
        url: "http://todo-api-alb-1542586732.ap-south-1.elb.amazonaws.com"
      }
    ]
  },
  apis: [
    "./routes/*.js"
  ]
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;