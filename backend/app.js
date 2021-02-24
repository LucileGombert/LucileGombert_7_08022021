// Imports
const express = require('express');
const bodyParser = require('body-parser');


// Permet de créer l'application express
const app = express();


// Middleware CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


// Permet d'importer les routers user et post
const userRoutes = require('./routes/user');
// const postRoutes = require('./routes/post');


// Transforme le corps de la requête en objet JS
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Permet d'accéder aux routes pour les utilisateurs et les publications
app.use('/api/user', userRoutes);
// app.use('/api/post', postRoutes);


// Permet d'exporter l'application express pour pouvoir y accéder depuis les autres fichiers du projet 
module.exports = app;

