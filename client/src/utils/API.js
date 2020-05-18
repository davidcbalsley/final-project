import axios from "axios"
export default {
    // Gets all food bank
    getFoodBank: function() {
      return axios.get("/api/foodbank");
    },
    // Gets the food bank with the given id
    getFoodBank: function(id) {
      return axios.get("/api/foodbank/" + id);
    },
    // Deletes the food bank with the given id
    deleteFoodBank: function(id) {
      return axios.delete("/api/foodbank/" + id);
    },
    // Saves a food bank to the database
    saveFoodBank: function(foodBankData) {
      return axios.post("/api/foodbank", foodBankData);
    }
  };