
const express = require('express');
const mysql2 = require('mysql2');

const app = express();
const port = 3001;

const connection = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Saman@123',
  database: 'mini_project'
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.post('/testing', (req, res) => {
    const { field1, field2 } = req.body.data;
  
    // Insert data into MySQL
    const query = 'INSERT INTO your_table_name (field1, field2) VALUES (?, ?)';
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
  

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
