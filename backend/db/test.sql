-- SELECT email, password FROM users;
        
SELECT cities.id, short_name, long_name, images.url
FROM cities
JOIN images ON images.city_id = cities.id
WHERE short_name = 'Toronto'
GROUP BY cities.id, images.url;

SELECT attractions.*, cities.id, cities.short_name
FROM attractions
JOIN cities ON attractions.city_id = cities.id
WHERE short_name = 'Toronto'
GROUP BY cities.id, attractions.id
