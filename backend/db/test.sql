-- SELECT email, password FROM users;
        
-- SELECT image.id, image.url, image.alt_description, city.id as city_id, short_name
-- FROM city
-- JOIN image ON image.city_id = city.id
-- WHERE short_name = 'Toronto'
-- GROUP BY image.id, city.id;

-- SELECT attraction.*, city.id as place_id, city.short_name
-- FROM attraction
-- JOIN city ON attraction.city_id = city.id
-- -- WHERE short_name = 'Toronto'
-- GROUP BY city.id, attraction.id;

-- SELECT city.id, short_name, image.url as alt
-- FROM city
-- GROUP BY city.id, image.url;

-- SELECT city.id, short_name, long_name, image_url, population, COUNT(visit.*) as total_visit
-- FROM city
-- JOIN visit on city.id = visit.city_id
-- GROUP BY city.id
-- ORDER BY total_visit DESC
-- LIMIT 12;

SELECT trip_attraction.id, attraction.name
FROM trip_attraction
JOIN attraction on trip_attraction.attraction_id = attraction.id
WHERE trip_attraction.trip_id = 13;