const request = require('request');
const breed = process.argv.slice(2);

const fetchBreedDescription = function(breedName) {
  // Image Search
  // "https://api.thecatapi.com/v1/images/search?breed_ids="
  // Breed Search
  // "https://api.thecatapi.com/v1/breeds/search?q="

  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, function(error, response, body) {
    const data = JSON.parse(body);
    if (error) {
      console.error('error:', error);
    } else if (data === []) {
      console.log("Breed not found!");
    } else {
      console.log(data[0].description); 
    } 
  });
};

fetchBreedDescription(breed);
