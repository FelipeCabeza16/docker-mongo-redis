Para correr el comando para desarrollo __npm run dev__

Base de datos de un modelo con mongo para un blog, se conecta a la base de datos de mongo

BASE DE DATOS __mongodb://127.0.0.1:27017/blog-api-dev)__

## Endpoints ##


_GET_ _/blogs/_ --> Recupera todos los blogs (se necesita al menos haber insertado uno)


_POST_ _/blogs/_ --> Inserta un blog, ver el ejemplo del JSON abajo

Ejemplo 
{
    "title": "Como ser mi propio jefe",
    "author": "Gabriel Vega",
    "body": "Afiliarse a DMG"
}