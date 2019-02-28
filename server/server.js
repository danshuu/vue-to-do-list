const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const ToDoController = require('./Controllers/to-do-controller');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "/../")));

app.route('/')
  .post(ToDoController.addToList);

app.get('/getList', ToDoController.getList);

app.listen(3000);
