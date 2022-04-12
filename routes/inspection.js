const express = require('express')
const router = express.Router();
const db = require('../config/config');
const Inspection = require('../controllers/inspection.controller');
const checkAuth = require("../utils/check.auth");

router.get('/', checkAuth, Inspection.findAll);
// router.post('/create', checkAuth, Inspection.create);
// router.put('/update/:id', checkAuth, Inspection.update);
// router.delete('/delete/:id', checkAuth, Inspection.delete);


module.exports = router;