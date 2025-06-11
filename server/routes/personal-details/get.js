// routes/personal-details/get.js
import express from 'express';
const router = express.Router();
import db from '../../utils/db.js';

router.get('/', async (req, res) => {
  try {
    const results = await db.select('*').from('personal_details');
    res.json(results);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: 'An error occurred while fetching personal details' });
  }
});

export default router;
