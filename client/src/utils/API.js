import axios from "axios"
export default {
    
    search: function () {
        return axios.get("/api/foodbank")
    },
    createLoginCredentials: function(query) {
        return axios.post("/api/users/signup", query);
    },
    verifyLoginCredentials: function(query) {
        return axios.post("/api/users/login", query);
    },
    createClient: function(query) {
        return axios.post("/api/clients", query);
    },
    getClient: function(id) {
        return axios.get("/api/clients/" + id);
    }
}