
const express = require('express');
const router = express.Router();

const connection = require('../daabase');


router.post('/details', (req, res) => {
    const { field1, field2 } = req.body;
    // Insert data into MySQL
    const query = 'INSERT INTO mini_project.testing VALUES(?,?)';
    connection.query(query, [field1, field2], (err, result) => {
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