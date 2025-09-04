# Caso_Estudio_Peliculas

Este proyecto es una API REST en Node.js con Express y MongoDB para gestionar películas, directores, géneros, productoras y tipos de medios (series/películas).

Es un ejercicio académico desarrollado para la Institución Universitaria Digital de Antioquia, con el fin de aprender sobre arquitectura monolítica y diseño de APIs.

**Tecnologías utilizadas**
- Node.js + Express
- MongoDB + Mongoose
- Postman (para pruebas)

api/
│── src/
│   ├── models/        # Modelos de la BD
│   ├── controllers/   # Lógica de cada módulo
│   ├── routes/        # Endpoints de la API
│   ├── database.js    # Conexión a MongoDB
│   ├── app.js         # Configuración de la app
│   └── server.js      # Punto de entrada
│── package.json
│── package-lock.json 
│── README.md

**Instalación y ejecución**

Clonar el repositorio:
git clone https://github.com/juaquinterolo/Caso_Estudio_Peliculas.git
cd api

El servidor estará en:
http://localhost:27017


**Ejemplo de request en Postman**

POST http://localhost:27017/api/generos
{
  "nombre": "Acción",
  "descripcion": "Películas de acción intensa"
}

POST http://localhost:27017/api/media
{
  "serial": "abc123",
  "titulo": "Inception",
  "sinopsis": "Un ladrón roba secretos a través de los sueños.",
  "url": "https://servidor.com/inception.mp4",
  "imagen": "https://servidor.com/inception.jpg",
  "anioEstreno": 2010,
  "genero": "ID-del-genero",
  "director": "ID-del-director",
  "productora": "ID-de-la-productora",
  "tipo": "ID-del-tipo"
}
