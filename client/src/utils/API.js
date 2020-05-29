import axios from "axios"
export default {
    
    search: function () {
        return axios.get("/api/foodbank")
    },
    postLoginCredentials: function(loginData) {
        return axios.post("/login", loginData);
    }
}