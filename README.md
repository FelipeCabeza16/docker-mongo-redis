# Aplicación hecha en express-mongo-redis-docker #

## Para correr la app se hace un  f03c15
- ![f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) `sudo docker-compose up`

Base de datos de un modelo con mongo y redis para un blog, 

__Cuando se hace una inserción en post se inserta a la base de datos de redis y de mongo__

BASE DE DATOS __mongodb://127.0.0.1:27017/blog-api-dev)__

## Endpoints ##


_GET_ _/blogs/mongo_ --> Recupera todos los blogs con mongo

_GET_ _/blogs/redis_ --> Recupera todos los blogs con redis

_GET_ _/blogs/mongo/:id_ --> Recupera el blog por id con mongo

_GET_ _/blogs/redis/:id_ --> Recupera el blog por id con redis


_POST_ _/blogs/_ --> Inserta un blog, ver el ejemplo del JSON abajo

Ejemplo 
{
    "title": "Como ser mi propio jefe",
    "author": "Gabriel Vega",
    "body": "Afiliarse a DMG"
}