const express = require('express')
const router = express.Router();
const db = require('../config/config');
const Apiary = require('../controllers/apiary.controller');
const checkAuth = require("../utils/check.auth");


router.get('/', checkAuth, Apiary.findAll);
router.post('/create', checkAuth, Apiary.create);
router.put('/update/:id', checkAuth, Apiary.update);
router.delete('/delete/:id', checkAuth, Apiary.deleteApiary);



module.exports = router;