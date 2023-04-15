const express = require('express');
const router = express.Router();
const controllers = require('./src/controllers/controllersHome')

router.post('/verificar-texto', controllers.Post)
router.get('/', controllers.html)
router.get('/css/style.css', controllers.css)
router.get('/js/script.js', controllers.js)


module.exports = router;