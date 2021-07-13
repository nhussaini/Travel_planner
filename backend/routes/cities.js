/* eslint-disable camelcase */
const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

module.exports = ({
  findCity,
  getCity,
  addCity,
  addImage,
  addAttraction,
  getImages,
  getAttractions,
  addVisit,
}) => {
  //roadGhoat Credentials
  const roadGoatApiAuth = {
    auth: {
      username: "aee3dc619b9da58ca3a967b6cb7a4fc5",
      password: "01f998155debd93205287912664cb75c",
    },
  };

  router.post("/getCityData", async (req, res) => {
    const cityName = req.body.userInput;
    // saving all api quesries in variables
    const imageCall = `https://api.unsplash.com/search/photos?page=1&query=${cityName}&client_id=${process.env.imageKEY}&per_page=10&orientation=landscape`;
    // const weatherCall = `https://api.weatherbit.io/v2.0/forecast/daily?city=${req.body.userInput}&key=${process.env.weatherKEY}&days=7`;
    const googleCall = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=attractions+${cityName}&key=AIzaSyD6Gw9uN4YpFcH4cIjRbYbWKPl_vGQs0R0`;

    // console.log(findCity(cityName));
    const matchedCity = await findCity(cityName);
    // if city exist redirect to the route which will fetch existign data from db
    if (matchedCity) {
      res.redirect(`/api/cities/${cityName}`);
    } else {
      const allData = {};
      const locationId = await axios.get(
        `https://api.roadgoat.com/api/v2/destinations/auto_complete?q=${cityName}`,
        roadGoatApiAuth
      );
      // Do Error handling if City not found here----

      const fetchedCityData = await axios.get(
        `https://api.roadgoat.com/api/v2/destinations/${locationId.data.data[0].id}`,
        roadGoatApiAuth
      );
      allData.cityData = fetchedCityData.data.data;
      // Getting images and googleData
      const unsplashGoogleData = await Promise.all([
        axios.get(imageCall),
        axios.get(googleCall),
      ]);

      // Saving fetched data using api to allData Object
      allData.imageData = unsplashGoogleData[0].data.results;
      allData.googleData = unsplashGoogleData[1].data.results;
      // destructing properties for adding them to db
      const {
        short_name,
        long_name,
        population,
        latitude,
        longitude,
        airbnb_url,
        kayak_lodgings_url,
        google_events_url,
        alltrails_url,
        getyourguide_url,
        kayak_car_rental_url,
      } = allData.cityData.attributes;

      //Choose a Random no between 0 and 9 and choose a image of city based on that.
      const random = Math.floor(Math.random() * 9 + 1);
      const image_url = allData.imageData[random].urls.regular;
      // add the city data to db
      const addedCity = await addCity(
        short_name,
        long_name,
        population,
        image_url,
        latitude,
        longitude,
        airbnb_url,
        kayak_lodgings_url,
        google_events_url,
        alltrails_url,
        getyourguide_url,
        kayak_car_rental_url
      );
      // Save images to the image table
      const imagePromises = allData.imageData.map(async (item) => {
        await addImage(item.urls.regular, item.alt_description, addedCity.id);
      });

      // creating array of promises to call together using Promise.all later
      const attractionPromises = allData["googleData"].map(async (item) => {
        if (item.user_ratings_total > 100) {
          // saving the variable
          const { name, formatted_address, rating, user_ratings_total } = item;
          const { lat, lng } = item.geometry.location;
          const photo_reference = item["photos"][0].photo_reference;
          const response =
            await axios.get(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=600
                  &photoreference=${photo_reference}&key=AIzaSyD6Gw9uN4YpFcH4cIjRbYbWKPl_vGQs0R0`);
          // saving each attraction in the db
          const imageUrl = response.request.res.responseUrl;

          addAttraction(
            name,
            formatted_address,
            lat,
            lng,
            rating,
            user_ratings_total,
            imageUrl,
            addedCity.id
          );
        }
      });
      // Saving all the images andf attraction to the DB
      await Promise.allSettled(imagePromises);
      await Promise.allSettled(attractionPromises);
      res.redirect(`/api/cities/${cityName}`);
    }
  });

  //Route for Individual City
  router.get("/:id", async (req, res) => {
    const cityName = req.params.id;
    const matchedCity = await getCity(cityName);
    // if city doesnt exist in DB return error
    if (matchedCity === null) {
      return res.json(null);
    }
    // if city exist, then grab all the data(details, images, attractions) for the city
    const allData = {};
    const fetchedData = await Promise.all([
      getCity(cityName),
      getImages(cityName),
      getAttractions(cityName),
      addVisit(matchedCity.id, cityName),
    ]);
    allData.cityDetails = fetchedData[0];
    allData.images = fetchedData[1];
    allData.attractions = fetchedData[2];
    allData.test = "testing----";
    res.json(allData);
  });

  return router;
};
