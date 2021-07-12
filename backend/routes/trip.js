const express = require("express");
const router = express.Router();

/* insert users into database */

module.exports = ({addTrip, addTripAttractions}) => {
  

  router.post("/", async(req, res) => {

    console.log("req.body from backend",req.body);
    const {userId, cityId, attractions} = req.body;

    const newTrip = await addTrip(userId,cityId)
    // console.log("newtrip form line 20==>", newTrip);
    
    const promises = attractions.map((attraction)=> {
      addTripAttractions(newTrip.id, attraction.id)      
    });
    await Promise.all(promises)
  });
  return router;
};
