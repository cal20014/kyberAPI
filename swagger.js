const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "kyberAPI Docs",
    description: "API documentation for kyberData",
  },
  host: "http://localhost:8080",
  schemes: ["http"], // Using "http" for local development
};

const outputFile = "./swagger.json";
const routes = ["./routes/index.js"];

swaggerAutogen(outputFile, routes, doc);
