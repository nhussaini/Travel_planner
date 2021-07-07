DROP TABLE IF EXISTS cities CASCADE;
DROP TABLE IF EXISTS images CASCADE;
DROP TABLE IF EXISTS attractions CASCADE;

CREATE TABLE cities (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  population INT NOT NULL,
  airbnb VARCHAR(255),
  hotels VARCHAR(255),
  events VARCHAR(255),
  nature VARCHAR(255),
  guides VARCHAR(255),
  rent_cars VARCHAR(255)
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
