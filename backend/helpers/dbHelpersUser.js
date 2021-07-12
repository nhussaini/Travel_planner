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

  const getUserTripInfo = () => {
    const query = {
      text: `SELECT id, description from todo`,
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
    removeToDo
  };
};
