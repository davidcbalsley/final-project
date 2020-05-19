const router = require("express").Router();
const tempRoutes = require("./temp");
const foodBankRoutes = require("./FoodBank")

// Book routes
router.use("/temp", tempRoutes);
router.use("/foodbank", foodBankRoutes);

module.exports = router;
