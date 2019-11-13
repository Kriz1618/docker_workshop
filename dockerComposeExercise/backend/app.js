const express = require('express')
const app = express()
const port = 8000
const cors = require('cors');
app.use(cors());
app.options('*', cors());
const mongoose = require('mongoose');
const Person = mongoose.model('Person', { name: String });

mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true });

app.get('/', (req, res) => {
  const person1 = new Person({ name: "Test docker compose" });
  person1.save().then((person) => {
    res.send(person)
  }).catch(error => {
    console.log('@@@ error --> ', error);
    res.send({ error: true }, 500);
  });;
});

app.listen(port, () => console.log(`app listening on port ${port}!`))