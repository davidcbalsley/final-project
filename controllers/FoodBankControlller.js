const xmlParser = require('xml2json');
var convert = require('xml-js'); 
const axios = require ("axios")

// Define methods for controllers -- find one, find call, create, update, remove -- here
module.exports = {
  
 
  findByState: function (req, res) {
      var state = req.params.state
    axios.get("https://ws2.feedingamerica.org/fawebservice.asmx/GetOrganizationsByState?state="+state, {
      "headers": {
        "accept": "application/xml, text/xml, */*; q=0.01",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "text/plain",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site"
      },
      "referrer": "https://www.feedingamerica.org/find-your-local-foodbank",
      "referrerPolicy": "no-referrer-when-downgrade",
      "body": null,
      "method": "GET",
      "mode": "cors"
    }).then(function (results) {
     
      res.send(results.data)
    })
  }
};
