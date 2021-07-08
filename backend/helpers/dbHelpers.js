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
      text: `INSERT INTO city(
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
      text: `INSERT INTO image(url, city_id) VALUES ($1, $2) RETURNING *`,
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
      text: `INSERT INTO attraction( name,
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

  // const addUser = (firstName, lastName, email, password) => {
  //   const query = {
  //     text: `INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *`,
  //     values: [firstName, lastName, email, password],
  //   };

  //   return db
  //     .query(query)
  //     .then((result) => result.rows[0])
  //     .catch((err) => err);
  // };

  const findCity = (name) => {
    const query = {
      text: `SELECT * from city WHERE short_name = ($1)`,
      values: [name],
    };

    return db
      .query(query)
      .then((result) => (result.rows[0] ? true : false))
      .catch((err) => err);
  };

  const getCity = (name) => {
    const query = {
      text: `SELECT * from city WHERE short_name = ($1)`,
      values: [name],
    };

    return db
      .query(query)
      .then((result) => (result.rows[0] ? result.rows[0] : null))
      .catch((err) => err);
  };

  const getImages = (name) => {
    const query = {
      text: `SELECT city.id, short_name, long_name, image.url
      FROM city
      JOIN image ON image.city_id = city.id
      WHERE short_name = ($1)
      GROUP BY city.id, image.url;`,
      values: [name],
    };
    return db
      .query(query)
      .then((result) => (result.rows.length ? result.rows : null))
      .catch((err) => err);
  };

  const getAttractions = (name) => {
    const query = {
      text: `SELECT attraction.*, city.id, city.short_name
      FROM attraction
      JOIN city ON attraction.city_id = city.id
      WHERE short_name = ($1)
      GROUP BY city.id, attraction.id`,
      values: [name],
    };
    return db
      .query(query)
      .then((result) => (result.rows.length ? result.rows : null))
      .catch((err) => err);
  };

  return {
    getUsers,
    addCity,
    findCity,
    getCity,
    addImage,
    addAttraction,
    getImages,
    getAttractions,
  };
};
