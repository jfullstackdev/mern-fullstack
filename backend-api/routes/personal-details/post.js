// routes/post.js
const express = require('express');
const router = express.Router();
const db = require('../../utils/db');

router.post('/', async (req, res) => {
    try {
      const newItem = req.body;
      const [id] = await db('personal_details').insert(newItem);
      const createdItem = await db('personal_details').where({ id }).first(); // Query the database for the newly created row
      res.status(201).json(createdItem); // Return the newly created row
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while adding personal details' });
    }
  });

module.exports = router;