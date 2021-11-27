const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { newPlayer, getPlayers } = require('../controllers');
const router = Router();

router.post(
  '/newplayer',
  [
    check('name', 'Nombre obligatorio').not().isEmpty(),
    check('email', 'Email obligatorio').isEmail(),
    check(
      'msg',
      'Mensaje obligatorio con min caracteres min 5 y max 280'
    ).isLength({ min: 5, max: 280 }),
    check('twitter', 'No es un usuario de Twitter válido').contains('@'),
  ],
  validarCampos,
  newPlayer
);

router.get('/players', getPlayers);

module.exports = router;
