const express = require('express');

const ctrl = require('../../controllers/contacts');
const { validateBody, isValidId } = require('../../middlewares');
const schemas = require('../../schemas/contacts');

const router = express.Router();

router.get('/', ctrl.listContacts);

router.get('/:id', isValidId, ctrl.getContactById);

router.post('/', validateBody(schemas.addSchema), ctrl.addContact);

router.delete('/:id', ctrl.removeContact);

router.put(
  '/:id',
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateContact
);

router.patch(
  '/:id/favorite',
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;
