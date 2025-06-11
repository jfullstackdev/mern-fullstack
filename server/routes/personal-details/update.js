// routes/personal-details/update.js
import express from 'express';
const router = express.Router();
import db from '../../utils/db.js';

router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updatedDetails = req.body;
    await db('personal_details').where({ id }).update(updatedDetails);
    res.status(200).json({ message: 'Personal details updated successfully' });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: 'An error occurred while updating personal details' });
  }
});

export default router;
