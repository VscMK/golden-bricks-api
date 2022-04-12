const express = require('express')
const router = express.Router();
const db = require('../config/config');
const Queen = require('../controllers/queen.controller');
const checkAuth = require("../utils/check.auth");

router.get('/', checkAuth, Queen.findAll);
router.post('/create', checkAuth, Queen.create);
router.put('/update/:id', checkAuth, Queen.update);
router.delete('/delete/:id', checkAuth, Queen.delete);


module.exports = router;