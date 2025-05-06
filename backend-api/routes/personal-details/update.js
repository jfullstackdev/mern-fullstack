// routes/update.js
const express = require('express');
const router = express.Router();
const db = require('../../utils/db');

router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id; // Get the id from the URL parameters
    const updatedDetails = req.body;
    await db('personal_details').where({ id: id }).update(updatedDetails);
    res.status(200).json({ message: 'Personal details updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while updating personal details' });
  }
});

module.exports = router;