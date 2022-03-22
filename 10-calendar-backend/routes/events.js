const { Router } = require('express');
const { check } = require('express-validator');
const { validateForm } = require('../middlewares/validateForm');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { validateJWT } = require('../middlewares/validateJWT');
const { isDate } = require('../helpers/isDate');

const router = Router();

router.use(validateJWT);

router.get('/', getEvents);

router.post(
  '/', 
  [
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatorio').custom(isDate),
    check('end', 'Fecha de termino es obligatorio').custom(isDate),
    validateForm,
  ],
  createEvent
);

router.put('/:id', updateEvent);

router.delete('/:id', deleteEvent);

module.exports = router;