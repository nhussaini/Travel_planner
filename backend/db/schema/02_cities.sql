DROP TABLE IF EXISTS cities CASCADE;
DROP TABLE IF EXISTS images CASCADE;
DROP TABLE IF EXISTS attractions CASCADE;

CREATE TABLE cities (
  id SERIAL PRIMARY KEY NOT NULL,
  short_name VARCHAR(255) NOT NULL,
  long_name VARCHAR(255) NOT NULL,
  population INT NOT NULL,
  latitude decimal,
  longitude decimal,
  airbnb_url VARCHAR(255),
  kayak_lodgings_url VARCHAR(255),
  google_events_url VARCHAR(255),
  alltrails_url VARCHAR(255),
  getyourguide_url VARCHAR(255),
  kayak_car_rental_url VARCHAR(255)
);

CREATE TABLE images (
  id SERIAL PRIMARY KEY NOT NULL,
  url VARCHAR(255),
  city_id INT REFERENCES cities(id) ON DELETE CASCADE
);

CREATE TABLE attractions (
  id SERIAL PRIMARY KEY NOT NULL,
  lat decimal,
  long decimal,
  image_url VARCHAR(255),
  name VARCHAR(255),
  address VARCHAR(255),
  ratings decimal,
  total_ratings INT,
  photo_reference VARCHAR(255),
  city_id INT REFERENCES cities(id) ON DELETE CASCADE
);
