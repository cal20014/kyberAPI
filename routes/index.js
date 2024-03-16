const express = require("express");
const router = express.Router();
const { checkJwt } = require("../middleware/auth");
const dotenv = require("dotenv");
dotenv.config();

// const userRoutes = require("./userRoutes");
// const accountTypeRoutes = require("./accountTypeRoutes");
// const categoryRoutes = require("./categoryRoutes");
// const genreRoutes = require("./genreRoutes");
// const mediaRoutes = require("./mediaRoutes");
const kyberDataRoutes = require("./kyberDataRoutes");
const swagger = require("./swaggerRoutes");

// Routes
// router.use("/user", userRoutes);
// router.use("/accountType", accountTypeRoutes);
// router.use("/category", categoryRoutes);
// router.use("/genre", genreRoutes);
// router.use("/media", mediaRoutes);
router.use("/kyberData", kyberDataRoutes);
router.use("/api-docs", swagger);

module.exports = router;
