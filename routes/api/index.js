const router = require("express").Router();
const tempRoutes = require("./temp");

// Book routes
router.use("/temp", tempRoutes);

module.exports = router;
