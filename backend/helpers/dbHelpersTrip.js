/* eslint-disable camelcase */
module.exports = (db) => {


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



  return {
    getUsers,
  
  };
};
