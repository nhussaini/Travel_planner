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
      text : `DELETE FROM todo WHERE id = ($1) RETURNING *`,
      values: [id]
    };
    return db
    .query(query)
    .then((result) => result.rows[0])
    .catch((err) => err);
  }

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

  //get the city and attractions of the city for a user's trip
  const getUserTripInfo = (userId) => {
    const query = {
      text: ` SELECT city.short_name as city_name, city.image_url as city_url, attraction.name as attraction_name, attraction.image_url as attraction_url
      FROM city
      JOIN trip on trip.city_id = city.id
      JOIN users on trip.user_id = users.id
      JOIN trip_attraction on trip_attraction.trip_id = trip.id
      JOIN attraction on trip_attraction.attraction_id = attraction.id
      WHERE user_id = ($1)`,
      values: [userId]
    };
    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };
  const getUserTripTodo = (userId) =>{
    const query = {
      text: `SELECT trip.id as trip_id, city.short_name, todo.description
      FROM city
      JOIN trip on trip.city_id = city.id
      JOIN users on trip.user_id = users.id
      JOIN todo on todo.trip_id = trip.id
      WHERE users.id = ($1)`,
      values: [userId]
    };
    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);

  }
 

  return {
    getUsers,
    addToDo,
    registerUser,
    getToDos,
    removeToDo,
    getUserTripInfo
  };
};
