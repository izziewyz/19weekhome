// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// Geocoder API
var nytimesAPI = "eb3b8ed6cac04e53853df147abe539e2";
// Helper functions (ins case the only one is runQuery)
var helpers = {

  runQuery: function(location) {

    console.log(location);

// return axios.get({
//   url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
//   qs: {
//     'api-key': "eb3b8ed6cac04e53853df147abe539e2",
//     'q': q
//   },
// }, function(err, response, body) {
//   body = JSON.parse(body);
//   console.log(body);
// })

// }
// }





    // Figure out the geolocation
    //var queryURL = "http://api.opencagedata.com/geocode/v1/json?query=" +
      //location + "&pretty=1&key=" + geocodeAPI;

      var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
      location + "&pretty=1&apikey=" + nytimesAPI;

    return axios.get(queryURL).then(function(response) {

      console.log(response);
      return response.data.response.docs[0].snippet + response.data.response.docs[1].snippet;
       
    });
  }
};

// We export the helpers object (which contains runQuery)
module.exports = helpers;
