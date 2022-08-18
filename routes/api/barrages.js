const express = require('express');
const router = express.Router();
const barragesController = require('../../controllers/barragesController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
    .get(barragesController.getAllBarrages)
    .post(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), barragesController.createNewBarrage)
    .put( barragesController.updateBarrage)
    .delete(verifyRoles(ROLES_LIST.Admin), barragesController.deleteBarrage);

router.route('/name/:name')
    .get(barragesController.getBarragesbyname);
router.route('/date')
    .post(barragesController.getBarragesbytime);
router.route("/datee")
    .get(barragesController.getAlldates);
router.route("/names")
    .get(barragesController.getAllBarrageNames);
    
module.exports = router;