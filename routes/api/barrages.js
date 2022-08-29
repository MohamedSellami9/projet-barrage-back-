const express = require('express');
const router = express.Router();
const barragesController = require('../../controllers/barragesController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
    .post( barragesController.createNewBarrage)
    .put( barragesController.updateBarrage)

router.route('/:Nom_Fr&:Date')    
    .delete( barragesController.deleteBarrage);


router.route("/index")
    .put(barragesController.addBarragesIndex);
module.exports = router;