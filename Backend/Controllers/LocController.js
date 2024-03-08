const express = require('express');
const router = express.Router();

const connection = require('../daabase');

router.post('/location', (req, res) => {
    const { latitude, longitude } = req.body;
    // Insert data into MySQL
    const query = 'INSERT INTO mini_project.location VALUES(?,?)';
    let id = Math. floor(Math. random() * max) + 1;
    connection.query(query, [id,lattitude, longitude], (err, result) => {
      if (err) {
        console.error('Error inserting data into MySQL:', err);
        res.status(500).send('Internal Server Error');

        return;
      }
      console.log('Data inserted successfully');
      res.status(200).send('Data inserted successfully');
    });
  });

module.exports = router;