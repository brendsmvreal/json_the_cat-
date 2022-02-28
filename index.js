const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv[2];
fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    const descBody = JSON.parse(desc.body);
    if (descBody === []) {
      console.log("Breed not found!");
    } else {
      console.log(descBody[0].description);
    }
  }
});
module.exports = { fetchBreedDescription };

