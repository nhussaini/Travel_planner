DROP TABLE IF EXISTS trip CASCADE;
DROP TABLE IF EXISTS todo CASCADE;

CREATE TABLE trip(
  id SERIAL PRIMARY KEY NOT NULL,
  date date NOT NULL,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  city_id INT REFERENCES city(id) ON DELETE CASCADE
  attraction_id INT REFERENCES attraction(id) ON DELETE CASCADE,
);

CREATE TABLE todo(
  id SERIAL PRIMARY KEY NOT NULL,
  description VARCHAR(255)
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  trip_id INT REFERENCES trip(id) ON DELETE CASCADE,
)


