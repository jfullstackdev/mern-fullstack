// routes/personal-details/delete.js
import express from 'express';
const router = express.Router();
import db from '../../utils/db.js';

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await db('personal_details').where({ id }).del();
    res.status(200).json({ message: 'Personal details deleted successfully' });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: 'An error occurred while deleting personal details' });
  }
});

export default router;
