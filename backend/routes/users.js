const express = require('express');
const router = express.Router();

/* GET users listing. */
router.post('/', (req, res, next) => {
  console.log("reqbody", req.body)
  res.send('post routeee');
});

router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});



module.exports = router;
