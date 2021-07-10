DROP TABLE IF EXISTS city CASCADE;
DROP TABLE IF EXISTS image CASCADE;
DROP TABLE IF EXISTS attraction CASCADE;
DROP TABLE IF EXISTS visit CASCADE;

CREATE TABLE city (
  id SERIAL PRIMARY KEY NOT NULL,
  short_name VARCHAR(255) UNIQUE NOT NULL,
  long_name VARCHAR(255) NOT NULL,
  image_url VARCHAR(255),
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

CREATE TABLE image (
  id SERIAL PRIMARY KEY NOT NULL,
  url VARCHAR(255) NOT NULL,
  alt_description VARCHAR(255),
  city_id INT REFERENCES city(id) ON DELETE CASCADE
);

CREATE TABLE attraction (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  formatted_address VARCHAR(255),
  lat decimal,
  lng decimal,
  rating decimal,
  user_ratings_total INT,
  image_url VARCHAR(255),
  city_id INT REFERENCES city(id) ON DELETE CASCADE
);

CREATE TABLE visit (
  id SERIAL PRIMARY KEY NOT NULL,
  city_id INT REFERENCES city(id) ON DELETE CASCADE,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  visited_at TIMESTAMP DEFAULT now()
)