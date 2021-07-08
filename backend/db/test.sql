-- SELECT email, password FROM users;
        
SELECT image.id, image.url, image.alt_description, city.id as city_id, short_name
FROM city
JOIN image ON image.city_id = city.id
WHERE short_name = 'Toronto'
GROUP BY image.id, city.id;

-- SELECT attractions.*, cities.id, cities.short_name
-- FROM attractions
-- JOIN cities ON attractions.city_id = cities.id
-- WHERE short_name = 'Toronto'
-- GROUP BY cities.id, attractions.id
