
const express = require('express');
const router = express.Router();

const connection = require('../daabase');



router.post('/details', (req, res) => {
    const { field1, field2 } = req.body;
    const name = "Sample";

    const quer1 = 'SELECT name FROM mini_project.testing';
    router.get('/booking',(req,res)=>{
        const sql = 'SELECT name FROM mini_project.testing';
        connection.query(sql,(err,data)=>{
            if(err) return res.json(err);
            else return res.json(data);
        })
    })
    // Insert data into MySQL
    const query = 'UPDATE mini_project.testing SET name = ?, phone = ?';
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