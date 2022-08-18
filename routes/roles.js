const express = require('express');
const router = express.Router();
const rolesController = require('../controllers/rolesController');


router.route('/')
    .put(rolesController.updateUsers)


module.exports = router;