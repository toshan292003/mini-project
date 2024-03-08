const express = require('express');
const router = express.Router();

const connection = require('../daabase');

router.post('/booking', (req, res) => {
    const { name, date, type } = req.body;
    // Insert data into MySQL
    const query = 'INSERT INTO mini_project.bookings VALUES(?,?,?)';
    connection.query(query, [name, date,type], (err, result) => {
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