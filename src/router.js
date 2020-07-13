import express from 'express';

import middleware from './middleware.js';
import controllerSafe from './controllers/safe.controller.js';
import controllerActions from './controllers/actions.controller.js';
import controllerDaoLyCun from './controllers/daolycun.controller.js';

const router = express.Router();

router.use(middleware);

router.post('/safe', controllerSafe);
router.post('/daolycun', controllerDaoLyCun);
router.post('/actions', controllerActions);

export default router;