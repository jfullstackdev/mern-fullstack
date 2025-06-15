// routes/personal-details/index.js
import express from 'express';
const router = express.Router();

import getRoutes from './get.js';
import postRoutes from './post.js';
import updateRoutes from './update.js';
import deleteRoutes from './delete.js';

router.use(getRoutes);
router.use(postRoutes);
router.use(updateRoutes);
router.use(deleteRoutes);

export default router;
