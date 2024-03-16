const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "kyberAPI Docs",
    description: "API documentation for kyberData",
  },
  host: "kyberapi.onrender.com",
  schemes: ["https"], // Using "http" for local development
};

const outputFile = "./swagger.json";
const routes = ["./routes/index.js"];

swaggerAutogen(outputFile, routes, doc);
