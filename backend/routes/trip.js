const express = require("express");
const router = express.Router();

/* insert users into database */

module.exports = ({addTrip}) => {
  

  router.post("/", (req, res) => {
    // console.log("reached this route");
    // console.log("req.body from line 11->",req.body);
    const {userId, cityId} = req.body;

    console.log("req.body from backend",req.body);
    // console.log("cityid",cityId);
    addTrip(userId,cityId).then((data)=>{
      console.log("data added to db successfully");
      console.log("new trip data=> ", data);
    })
   
  });




  return router;
};
