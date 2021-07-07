/* eslint-disable camelcase */
const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

module.exports = ({
  getUsers,
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
    const cityName = req.body.userInput || "Toronto";
    const allData = {};
    // saving all api quesries in variables
    const imageCall = `https://api.unsplash.com/search/photos?page=1&query=${cityName}&client_id=${process.env.imageKEY}&per_page=10&orientation=landscape`;
    // const weatherCall = `https://api.weatherbit.io/v2.0/forecast/daily?city=${req.body.userInput}&key=${process.env.weatherKEY}&days=7`;
    const googleCall = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=attractions+${cityName}&key=AIzaSyD6Gw9uN4YpFcH4cIjRbYbWKPl_vGQs0R0`;

    getCity("Toronto")
      .then((city) =>
        city === null ? res.json("Sorry Cant find") : res.json(city)
      )
      .catch((err) => res.json("count not find city"));
    // since Roaggoat data needs two api call, getting this data first before making calls to other api.
    // first get the id of the location for further api calls
    // axios
    //   .get(
    //     `https://api.roadgoat.com/api/v2/destinations/auto_complete?q=${cityName}`,
    //     roadGoatApiAuth
    //   )
    //   .then((data) => {
    //     const locationId = data.data.data[0].id;
    //     // api call to get location data using the location id from previous call
    //     axios
    //       .get(
    //         `https://api.roadgoat.com/api/v2/destinations/${locationId}`,
    //         roadGoatApiAuth
    //       )
    //       .then((data) => {
    //         allData.cityData = data.data.data;
    //       });
    //   });
    // // Getting images and googleData
    // Promise.all([
    //   axios.get(imageCall),
    //   // axios.get(weatherCall),
    //   axios.get(googleCall),
    // ])
    //   .then((all) => {
    //     allData.imageData = all[0].data.results;
    //     allData.googleData = all[1].data.results;
    //     // console.log(all[0].data.results);

    //     // extract the data coming from roadgoatApi and sav them in a variable
    //     const {
    //       short_name,
    //       long_name,
    //       population,
    //       latitude,
    //       longitude,
    //       airbnb_url,
    //       kayak_lodgings_url,
    //       google_events_url,
    //       alltrails_url,
    //       getyourguide_url,
    //       kayak_car_rental_url,
    //     } = allData.cityData.attributes;

    //     // add the city data to db
    //     return addCity(
    //       short_name,
    //       long_name,
    //       population,
    //       latitude,
    //       longitude,
    //       airbnb_url,
    //       kayak_lodgings_url,
    //       google_events_url,
    //       alltrails_url,
    //       getyourguide_url,
    //       kayak_car_rental_url
    //     );
    //     // res.send(allData);
    //   })
    //   .then((newCity) => {
    //     // Save images to the image table
    //     // console.log(allData.imageData);
    //     for (let item of allData.imageData) {
    //       addImage(item.urls.regular, newCity.id);
    //     }

    //     // save attractions for a place in the attraction table
    //     for (let item of allData["googleData"]) {
    //       if (item.user_ratings_total > 100) {
    //         // saving the variable
    //         const { name, formatted_address, rating, user_ratings_total } =
    //           item;
    //         const { lat, lng } = item.geometry.location;
    //         const photo_reference = item["photos"][0].photo_reference;
    //         // saving each attraction in the db
    //         addAttraction(
    //           name,
    //           formatted_address,
    //           lat,
    //           lng,
    //           rating,
    //           user_ratings_total,
    //           photo_reference,
    //           newCity.id
    //         );
    //       }
    //     }
    //   })
    //   .then((data) => res.json(data))
    //   .catch((err) =>
    //     res.json({
    //       error: err.message,
    //     })
    //   );
  });

  router.post("/users", (req, res) => {
    getUsers()
      .then((users) => res.json(users))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });
  return router;
};
