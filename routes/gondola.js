const express = require('express')
const router = express.Router();
const db = require('../config/config');
const Gondola = require('../controllers/gondola.controller');
const checkAuth = require('../utils/check.auth');

router.get('/', checkAuth, Gondola.findAll);
router.post('/create', checkAuth, Gondola.create);
router.put('/update/:id', checkAuth, Gondola.update);
router.delete('/delete/:id', checkAuth, Gondola.delete);

module.exports = router;