const request = require('request');
const fetchBreedDescription = function(breedName, cb) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    if (error) {
      return cb(error);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        return cb("Breed not existent!");
      } else {
        return cb(null, data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };
