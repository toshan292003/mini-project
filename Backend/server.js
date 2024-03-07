const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

const connection = require('./daabase');

app.use(cors());

app.post('/details', (req, res) => {
    const { field1, field2 } = req.body;
  
    // Insert data into MySQL
    const query = 'INSERT INTO sample (idsample, name) VALUES (?, ?)';
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
  
app.get('/',(req,res)=>{
  res.send("Hello this is backend.")
})

app.listen(port, (req,res) => {
  console.log(`Server running on port ${port}`);
});
