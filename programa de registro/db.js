const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo/registrodb')

    .then(db => console.log('BASE DE DATOS CONECTA', db.connection.host))
    .catch(err => console.error(err));

    