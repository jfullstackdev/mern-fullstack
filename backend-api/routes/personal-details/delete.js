// routes/delete.js
const express = require('express');
const router = express.Router();
const db = require('../../utils/db');

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id; // Get the id from the URL parameters
    await db('personal_details').where({ id: id }).del();
    res.status(200).json({ message: 'Personal details deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while deleting personal details' });
  }
});

module.exports = router;