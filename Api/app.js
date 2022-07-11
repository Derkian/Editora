const express = require('express');

var noticias = require('./routers/noticia');

const app = express();

app.use(express.json());

app.use("/api", noticias);

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080/");
});