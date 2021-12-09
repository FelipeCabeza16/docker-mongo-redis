## Aplicación hecha en express-mongo-redis-docker ##

# Correr la app #

Para correr la app se hace un __sudo docker-compose up__ 

## Detalles ##

Base de datos de un modelo con mongo y redis para un blog, 

__Cuando se hace una inserción en post se inserta a la base de datos de redis y de mongo__

BASE DE DATOS __mongodb://127.0.0.1:27017/blog-api-dev)__

## Endpoints ##


_GET_ _localhost:3000/blogs/mongo_ --> Recupera todos los blogs con mongo

_GET_ _localhost:3000/blogs/redis_ --> Recupera todos los blogs con redis

_GET_ _localhost:3000/blogs/mongo/:id_ --> Recupera el blog por id con mongo

_GET_ _localhost:3000/blogs/redis/:id_ --> Recupera el blog por id con redis


_POST_ _localhost:3000/blogs/_ --> Inserta un blog, ver el ejemplo del JSON abajo

Ejemplo 
{
    "title": "Como ser mi propio jefe",
    "author": "Gabriel Vega",
    "body": "Afiliarse a DMG"
}