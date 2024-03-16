const express = require("express");
const router = express.Router();
const { auth } = require("express-oauth2-jwt-bearer");
const { checkJwt } = require("../middleware/auth");
const dotenv = require("dotenv");
dotenv.config();

const userRoutes = require("./userRoutes");
const accountTypeRoutes = require("./accountTypeRoutes");
const categoryRoutes = require("./categoryRoutes");
const genreRoutes = require("./genreRoutes");
const mediaRoutes = require("./mediaRoutes");
const swagger = require("./swaggerRoutes");

// Routes
router.use("/user", checkJwt, userRoutes);
router.use("/accountType", checkJwt, accountTypeRoutes);
router.use("/category", checkJwt, categoryRoutes);
router.use("/genre", checkJwt, genreRoutes);
router.use("/media", checkJwt, mediaRoutes);
router.use("/api-docs", swagger);

module.exports = router;
