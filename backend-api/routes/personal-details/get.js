// routes/category.js
const express = require('express');
const router = express.Router();
const db = require('../../utils/db');

router.get('/', async (req, res) => {
  try {
    const results = await db.select('*').from('personal_details');
    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching category items' });
  }
});

module.exports = router;