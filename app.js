const express = require('express');

const app = express();

const users = require("./controllers/users");

app.use('/', users);

app.listen(8080, () => {
    console.log(' servidor iniciado com sucesso na porta 8080: http://localhost:8080');
});
