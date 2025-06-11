// routes/personal-details/post.js
import express from 'express';
const router = express.Router();
import db from '../../utils/db.js';

router.post('/', async (req, res) => {
  try {
    const newItem = req.body;
    const [id] = await db('personal_details').insert(newItem);
    const createdItem = await db('personal_details').where({ id }).first();
    res.status(201).json(createdItem);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: 'An error occurred while adding personal details' });
  }
});

export default router;
