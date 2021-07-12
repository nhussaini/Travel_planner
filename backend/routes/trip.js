const express = require("express");
const router = express.Router();

/* insert users into database */

module.exports = ({addTrip, addTripAttractions}) => {
  router.post("/", async(req, res) => {

    const {userId, cityId, attractions} = req.body;
    
    //add a new trip to db
    const newTrip = await addTrip(userId,cityId)
    
    const promises = attractions.map((attraction)=> {
      //add attractions of a trip to db
      addTripAttractions(newTrip.id, attraction.id)      
    });
    await Promise.all(promises)
  
  });
  return router;
};
