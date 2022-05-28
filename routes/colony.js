const express = require('express')
const router = express.Router();
const db = require('../config/config');
const Colony = require('../controllers/colony.controller');
const checkAuth = require("../utils/check.auth");

router.get('/', checkAuth, Colony.findAll);
router.get('/findOne/:id', checkAuth, Colony.findOne);
router.post('/create', checkAuth, Colony.create);
router.put('/update/:id', checkAuth, Colony.update);
router.delete('/delete/:id', checkAuth, Colony.delete);

module.exports = router;