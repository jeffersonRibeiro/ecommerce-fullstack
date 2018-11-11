import express from 'express';

import homeController from '../controllers/home';
import { notFoundController } from '../controllers/misc';

const router = express.Router();

router.get('/', homeController);
router.use(notFoundController);


export default router