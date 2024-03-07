const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

const connection = require('./daabase');
const smapleController = require('./Controllers/sample')
app.use(cors());

app.use(express.json())


app.use('/app',smapleController);




app.get('/',(req,res)=>{
  res.send("Hello this is backend.")
})

app.listen(port, (req,res) => {
  console.log(`Server running on port ${port}`);
});
