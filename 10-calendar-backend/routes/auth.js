const { Router } = require('express');
const { createUser, loginUser, revalidateToken } = require('../controllers/auth');
const { check } = require('express-validator');
const { validateForm } = require('../middlewares/validateForm');
const { validateJWT } = require('../middlewares/validateJWT');

const router = Router();

router.post(
  '/register',
  [
    check('name', 'El nombre es obligatorio').notEmpty(),
    check('email', 'El email no es valido').isEmail(),
    check('password', 'El password debe de ser mas de 6 caracteres').isLength({min: 6}),
    validateForm,
  ],
  createUser,
);

router.post(
  '/', 
  [
    check('email', 'El email no es valido').isEmail(),
    check('password', 'El password debe de ser mas de 6 caracteres').isLength({min: 6}),
    validateForm,
  ],
  loginUser,
);

router.get('/renew', validateJWT, revalidateToken);

module.exports = router;