var mongoose = require('mongoose');
const config = require("../env/index") ;

mongoose.connect(config.database.mongoDb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    usedFindAndModify: false
});

var noticiasSchema = new mongoose.Schema({
    titulo: String,
    conteudo: String,
    dataPublicacao: Date
}, { collection: 'noticias' }
);

module.exports = { Mongoose: mongoose, NoticiasSchema: noticiasSchema }

