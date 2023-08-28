const express = require('express');
const { validateBody, authenticate } = require('../../middlewares');
const ctrl = require('../../controllers/auth');
const schemas = require('../../schemas/contacts');

const router = express.Router();

router.post('/register', validateBody(schemas.authSchema), ctrl.register);

router.post('/login', validateBody(schemas.authSchema), ctrl.login);

router.get('/current', authenticate, ctrl.getCurrent);

router.post('/logout', authenticate, ctrl.logout);

module.exports = router;
