var express = require('express');
var router = express.Router();
var db = require('../dataBase/db');
var Noticias = db.Mongoose.model('noticias', db.NoticiasSchema, 'noticias');

//Listar Todos
router.get('/noticias', function (req, res, next) {    
    Noticias.find({}).lean().exec(function (e, docs) {
        res.json(docs);
        res.end();
    });
});

router.get('/noticias/:id', function (req, res, next) {    
    Noticias.find({ _id: req.params.id }).lean().exec(function (e, docs) {
        res.json(docs);
        res.end();
    });
});

router.post('/noticias/', function (req, res, next) {    
    var novaNoticia = new Noticias({ titulo: req.body.titulo, conteudo: req.body.conteudo, dataPublicacao: new Date() });    
    novaNoticia.save(function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
            res.end();
            return;
        }
        res.json(novaNoticia);
        res.end();
    });
});

router.put('/noticias/:id', function (req, res, next) {    
    Noticias.findOneAndUpdate({ _id: req.params.id }, req.body, { upsert: true }, function (err, doc) {
        if (err) {
            res.status(500).json({ error: err.message });
            res.end();
            return;
        }
        res.json(req.body);
        res.end();
    });
});

router.delete('/noticias/:id', function (req, res, next) {    
    Noticias.find({ _id: req.params.id }).remove(function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
            res.end();
            return;
        }
        res.json({success: true});
        res.end();
    });
});

module.exports = router;