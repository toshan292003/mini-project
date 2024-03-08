const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

const connection = require('./daabase');
const PhoneController = require('./Controllers/PhoneController')
const LocController = require('')
app.use(cors());

app.use(express.json())

app.use('/app',PhoneController);
app.use('/app',PhoneController);

app.get('/',(req,res)=>{
  res.send("Hello this is backend.")
})

app.listen(port, (req,res) => {
  console.log(`Server running on port ${port}`);
});
