const express = require('express');
const router = express.Router();

const getRoutes = require('./get');
const postRoutes = require('./post');
const updateRoutes = require('./update');
const deleteRoutes = require('./delete');

router.use(getRoutes);
router.use(postRoutes);
router.use(updateRoutes);
router.use(deleteRoutes);

module.exports = router;