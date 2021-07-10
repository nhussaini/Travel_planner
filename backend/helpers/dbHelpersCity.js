/* eslint-disable camelcase */
module.exports = (db) => {
  const addCity = (
    short_name,
    long_name,
    population,
    image_url,
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
        image_url,
        latitude,
        longitude,
        airbnb_url,
        kayak_lodgings_url,
        google_events_url,
        alltrails_url,
        getyourguide_url,
        kayak_car_rental_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *`,
      values: [
        short_name,
        long_name,
        population,
        image_url,
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

  const addImage = (url, alt_description, city_id) => {
    const query = {
      text: `INSERT INTO image(url, alt_description, city_id) VALUES ($1, $2, $3) RETURNING *`,
      values: [url, alt_description, city_id],
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
    image_url,
    city_id
  ) => {
    const query = {
      text: `INSERT INTO attraction( name,
        formatted_address,
        lat,
        lng,
        rating,
        user_ratings_total,
        image_url,
        city_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
      values: [
        name,
        formatted_address,
        lat,
        lng,
        rating,
        user_ratings_total,
        image_url,
        city_id,
      ],
    };
    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

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
      text: `SELECT image.id, image.url, image.alt_description, city.id as city_id, short_name
      FROM city
      JOIN image ON image.city_id = city.id
      WHERE short_name = ($1)
      GROUP BY image.id, city.id;`,
      values: [name],
    };
    return db
      .query(query)
      .then((result) => (result.rows.length ? result.rows : null))
      .catch((err) => err);
  };

  const getAttractions = (name) => {
    const query = {
      text: `SELECT attraction.*, city.id AS place_id, city.short_name
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

  const addVisit = (city_id) => {
    const query = {
      text: `Insert INTO visit (city_id) VALUES ($1) RETURNING *`,
      values: [city_id],
    };
    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  return {
    addCity,
    findCity,
    getCity,
    addImage,
    addAttraction,
    getImages,
    getAttractions,
    addVisit,
  };
};
