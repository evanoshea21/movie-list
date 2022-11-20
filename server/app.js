const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000 || process.env.PORT;
var router = require('./routes/routes');
module.exports.app = app;

app.use(cors());
app.use(express.json());
app.use(express.static('client/dist'));
app.use('/movies', router);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT} baby`);
})