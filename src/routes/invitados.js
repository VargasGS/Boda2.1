const express = require('express');
const router = express.Router();

const invitadosController = require('../controllers/invitadosController');

router.get('/',invitadosController.list);
router.get('/conf',invitadosController.list2);
router.get('/campos/:nom',invitadosController.list3);
router.get('/campo/:nom',invitadosController.consultarCampos3);
router.post('/confirmar',invitadosController.confirmarAsis);


module.exports=router;