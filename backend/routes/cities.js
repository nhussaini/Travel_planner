/* eslint-disable camelcase */
const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

module.exports = ({
  getUsers,
  findCity,
  getCity,
  addCity,
  addImage,
  addAttraction,
  getImages,
  getAttractions,
}) => {
  //roadGhoat Credentials
  const roadGoatApiAuth = {
    auth: {
      username: "aee3dc619b9da58ca3a967b6cb7a4fc5",
      password: "01f998155debd93205287912664cb75c",
    },
  };
  router.post("/getCityData", (req, res) => {
    const cityName = req.body.userInput;
    // saving all api quesries in variables
    const imageCall = `https://api.unsplash.com/search/photos?page=1&query=${cityName}&client_id=${process.env.imageKEY}&per_page=10&orientation=landscape`;
    // const weatherCall = `https://api.weatherbit.io/v2.0/forecast/daily?city=${req.body.userInput}&key=${process.env.weatherKEY}&days=7`;
    const googleCall = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=attractions+${cityName}&key=AIzaSyD6Gw9uN4YpFcH4cIjRbYbWKPl_vGQs0R0`;

    // console.log(findCity(cityName));
    findCity(cityName).then((city) => {
      if (city) {
        // console.log("Reached IF---", cityName);
        // console.log("Redirecting From line 35-----");
        res.redirect(`/cities/${cityName}`);
      } else {
        // console.log("Reached ELSE---", cityName);
        const allData = {};
        axios
          .get(
            `https://api.roadgoat.com/api/v2/destinations/auto_complete?q=${cityName}`,
            roadGoatApiAuth
          )
          .then((data) => {
            const locationId = data.data.data[0].id;
            // api call to get location data using the location id from previous call
            axios
              .get(
                `https://api.roadgoat.com/api/v2/destinations/${locationId}`,
                roadGoatApiAuth
              )
              .then((data) => {
                allData.cityData = data.data.data;
              });
          });
        // Getting images and googleData
        Promise.all([
          axios.get(imageCall),
          // axios.get(weatherCall),
          axios.get(googleCall),
        ])
          .then((all) => {
            allData.imageData = all[0].data.results;
            allData.googleData = all[1].data.results;
            // console.log(all[0].data.results);

            // extract the data coming from roadgoatApi and sav them in a variable
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

            const random = Math.floor(Math.random() * 9 + 1);
            const image_url = allData.imageData[random].urls.regular;
            // add the city data to db
            return addCity(
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
            // res.send(allData);
          })
          .then(async (newCity) => {
            // Save images to the image table
            // console.log(allData.imageData);
            for (let item of allData.imageData) {
              // console.log(item.alt_description);
              addImage(item.urls.regular, item.alt_description, newCity.id);
            }

            const promises = allData["googleData"].map(async (item) => {
              if (item.user_ratings_total > 100) {
                // saving the variable
                const { name, formatted_address, rating, user_ratings_total } =
                  item;
                const { lat, lng } = item.geometry.location;
                const photo_reference = item["photos"][0].photo_reference;
                const response =
                  await axios.get(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=600
                &photoreference=${photo_reference}&key=AIzaSyD6Gw9uN4YpFcH4cIjRbYbWKPl_vGQs0R0`);
                // saving each attraction in the db
                // console.log("Line 118---", response.request.res.responseUrl);
                const imageUrl = response.request.res.responseUrl;

                addAttraction(
                  name,
                  formatted_address,
                  lat,
                  lng,
                  rating,
                  user_ratings_total,
                  imageUrl,
                  newCity.id
                );
              }
            });

            await Promise.allSettled(promises);
          })
          .then(() => {
            //After Adding data to Db, redirecting to the get route for city which will send back data to front end
            res.redirect(`/cities/${cityName}`);
          })
          .catch((err) =>
            res.json({
              error: err.message,
            })
          );
      }
    });
  });

  //Route for Individual City
  router.get("/:id", (req, res) => {
    const cityName = req.params.id;
    getCity(cityName).then((city) => {
      // if city doesnt exist in DB return error
      if (city === null) {
        return res.json("Sorry Cant find");
      }
      // if city exist, then grab all the data(details, images, attractions) for the city
      const allData = {};
      Promise.all([
        getCity(cityName),
        getImages(cityName),
        getAttractions(cityName),
      ])
        .then((all) => {
          allData.cityDetails = all[0];
          allData.images = all[1];
          // console.log("images----", allData.images);
          allData.attractions = all[2];
          allData.test = "testing----";
          res.json(allData);
        })
        .catch((err) => console.log(err));
    });
  });
  return router;
};
