/* eslint-disable camelcase */
module.exports = (db) => {


  const addTrip = (userId, cityId) => {
    const query = {
      text: `INSERT INTO trip(user_id, city_id) values ($1,$2) RETURNING *`,
      values: [userId, cityId],
    };
    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };



  return {
    addTrip
  
  };
};
