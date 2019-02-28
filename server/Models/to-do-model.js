const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb+srv://danielshu:1234@cluster0-xrgkr.mongodb.net/test?retryWrites=true', { useNewUrlParser: true })
  .then(() => console.log('Connected to Mongo!'))
  .catch(err => console.log(err));

itemSchema = new Schema({
  label: String,
  done: Boolean,
});

const ToDoItem = mongoose.model('ToDoItems', itemSchema);

module.exports = ToDoItem;