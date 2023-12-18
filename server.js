const express = require('express');
const bodyParser  = require('body-parser');  
const mongoose = require('mongoose'); 

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/ugmc', {
  userNewUrlParser: true,
  useUnifiedTopology: true,
}
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connectedto DB');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// ...

const router = require('./routes');

app.use('/api', router);

// ...