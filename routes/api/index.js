const router = require("express").Router();
const tempRoutes = require("./temp");
const foodBankRoutes = require("./FoodBank")
const userRoutes = require("./users");

// Routes
router.use("/temp", tempRoutes);
router.use("/foodbank", foodBankRoutes);
router.use("/users", userRoutes);

module.exports = router;
