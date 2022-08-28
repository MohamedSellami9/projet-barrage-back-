const express = require('express');
const router = express.Router();
const barragesController = require('../controllers/barragesController');
const ROLES_LIST = require('../config/roles_list');

router.route('/')
    .get(barragesController.getAllBarrages)

router.route('/name/:name')
    .get(barragesController.getBarragesbyname);
router.route('/date')
    .post(barragesController.getBarragesbytime);
router.route("/datee")
    .get(barragesController.getAlldates);
router.route("/names")
    .get(barragesController.getAllBarrageNames);
module.exports = router;