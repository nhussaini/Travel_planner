/* eslint-disable camelcase */
module.exports = (db) => {
  const getUsers = () => {
    const query = {
      text: "SELECT * FROM users",
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const addToDo = (description, userId) => {
    const query = {
      text: `INSERT INTO todo(description, user_id) values ($1,$2) RETURNING *`,
      values: [description, userId],
    };
    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  const removeToDo = (id) => {
    const query = {
      text: `DELETE FROM todo WHERE id = ($1) RETURNING *`,
      values: [id],
    };
    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  const getToDos = () => {
    const query = {
      text: `SELECT id, description from todo`,
    };
    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const registerUser = (firstName, lastName, email, password) => {
    const query = {
      text: ` INSERT INTO users (first_name, last_name, email, password)
      VALUES ($1, $2, $3, $4)
      RETURNING *`,
      values: [firstName, lastName, email, password],
    };
    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  //get user's Trip

  const getUserTrip = (userId) => {
    const query = {
      text: `SELECT trip.id, trip.user_id, city.short_name, city.image_url, city.long_name 
      FROM trip
      JOIN city ON trip.city_id = city.id
      WHERE trip.user_id = $1;`,
      values: [userId],
    };
    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const removeTrip = (trip_id) => {
    const query = {
      text: `DELETE FROM trip WHERE id = ($1) RETURNING *`,
      values: [trip_id],
    };
    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  //get the city and attractions of the city for a user's trip
  const getUserTripAttractions = (trip_id) => {
    const query = {
      text: ` SELECT trip.id, trip.user_id , trip_attraction.attraction_id as attraction_id, attraction.name, attraction.image_url, attraction.rating
      FROM trip
      JOIN trip_attraction ON trip.id = trip_attraction.trip_id
      JOIN attraction ON trip_attraction.attraction_id = attraction.id
      WHERE trip.id = $1;`,
      values: [trip_id],
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };
  const getUserTripTodo = (trip_id) => {
    const query = {
      text: `SELECT trip.id, todo.id, todo.description
      FROM trip
      JOIN todo ON trip.id = todo.trip_id
      WHERE trip.id = $1
      `,
      values: [trip_id],
    };
    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  return {
    getUsers,
    addToDo,
    registerUser,
    getToDos,
    removeToDo,
    getUserTrip,
    getUserTripAttractions,
    getUserTripTodo,
    removeTrip,
  };
};
