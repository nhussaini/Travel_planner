-- SELECT email, password FROM users;
        
SELECT image.id, image.url, image.alt_description, city.id as city_id, short_name
FROM city
JOIN image ON image.city_id = city.id
WHERE short_name = 'Toronto'
GROUP BY image.id, city.id;

SELECT attraction.*, city.id as place_id, city.short_name
FROM attraction
JOIN city ON attraction.city_id = city.id
-- WHERE short_name = 'Toronto'
GROUP BY city.id, attraction.id;