
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

app.post('/api/data', (req, res) => {
  const { data } = req.body;

  const { name, phone } = data;
//INSERT INTO `mini_project`.`testing` (`name`, `phone`) VALUES ('Toshan', '8549039062');

  const query = `INSERT INTO mini_project.testing (name, phone) VALUES (${name}, ${phone})`;
  connection.query(query, [name, phone], (err, result) => {
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
