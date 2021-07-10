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

  const addToDo = (description) => {
    const query = {
      text: `INSERT INTO todo(description) values ($1) RETURNING *`,
      values: [description],
    };
    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  const getToDos = () => {
    const query = {
      text: `SELECT description from todo`,
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

  return {
    getUsers,
    addToDo,
    registerUser,
    getToDos,
  };
};
