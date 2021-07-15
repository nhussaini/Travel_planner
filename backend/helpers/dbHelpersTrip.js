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

  const addTripAttractions = (tripId, attractionId) => {
    const query = {
      text: `INSERT INTO trip_attraction(trip_id, attraction_id) values ($1,$2) RETURNING *`,
      values: [tripId, attractionId],
    };
    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  const addTripTodos = (description, userId, tripId) => {
    const query = {
      text: `INSERT INTO todo(description,user_id, trip_id) values ($1,$2,$3) RETURNING *`,
      values: [description, userId, tripId],
    };
    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };
  return {
    addTrip,
    addTripAttractions,
    addTripTodos,
  };
};
