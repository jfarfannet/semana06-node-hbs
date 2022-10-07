var express = require('express');
var router = express.Router();

var usuario = require('../controllers/UsuarioController.js');

router.get('/', usuario.list);
router.get('/create', usuario.create);
router.post('/save', usuario.save);

module.exports = router;
