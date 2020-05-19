const router = require("express").Router();
const FoodBankController = require("../../controllers/FoodBankControlller");

 
  router
  .route("/:state")
  .get(FoodBankController.findByState)
module.exports = router;
