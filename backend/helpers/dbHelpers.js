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

  const addCity = (
    short_name,
    long_name,
    population,
    latitude,
    longitude,
    airbnb_url,
    kayak_lodgings_url,
    google_events_url,
    alltrails_url,
    getyourguide_url,
    kayak_car_rental_url
  ) => {
    const query = {
      text: `INSERT INTO cities(
        short_name,
        long_name,
        population,
        latitude,
        longitude,
        airbnb_url,
        kayak_lodgings_url,
        google_events_url,
        alltrails_url,
        getyourguide_url,
        kayak_car_rental_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *`,
      values: [
        short_name,
        long_name,
        population,
        latitude,
        longitude,
        airbnb_url,
        kayak_lodgings_url,
        google_events_url,
        alltrails_url,
        getyourguide_url,
        kayak_car_rental_url,
      ],
    };
    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  const addImage = (url, city_id) => {
    const query = {
      text: `INSERT INTO images(url, city_id) VALUES ($1, $2) RETURNING *`,
      values: [url, city_id],
    };
    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  const addAttraction = (
    name,
    formatted_address,
    lat,
    lng,
    rating,
    user_ratings_total,
    photo_reference,
    city_id
  ) => {
    const query = {
      text: `INSERT INTO attractions( name,
        formatted_address,
        lat,
        lng,
        rating,
        user_ratings_total,
        photo_reference,
        city_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
      values: [
        name,
        formatted_address,
        lat,
        lng,
        rating,
        user_ratings_total,
        photo_reference,
        city_id,
      ],
    };
    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  const addUser = (firstName, lastName, email, password) => {
    const query = {
      text: `INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *`,
      values: [firstName, lastName, email, password],
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  //   const getUsersPosts = () => {
  //     const query = {
  //       text: `SELECT users.id as user_id, first_name, last_name, email, posts.id as post_id, title, content
  //       FROM users
  //       INNER JOIN posts
  //       ON users.id = posts.user_id`,
  //     };

  //     return db
  //       .query(query)
  //       .then((result) => result.rows)
  //       .catch((err) => err);
  //   };

  const getCity = (name) => {
    const query = {
      text: `SELECT name from cities WHERE name = ${name}`,
      values: [name],
    };
    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  return {
    getUsers,
    addCity,
    getCity,
    addImage,
    addAttraction,
  };
};
