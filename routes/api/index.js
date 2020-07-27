const router = require("express").Router();
const foodBankRoutes = require("./FoodBank")
const clientRoutes = require("./client");
const userRoutes = require("./user");

// Routes
router.use("/foodbank", foodBankRoutes);
router.use("/clients", clientRoutes);
router.use("/users", userRoutes);

module.exports = router;
