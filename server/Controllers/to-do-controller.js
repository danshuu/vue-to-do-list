const ToDoItem = require('../Models/to-do-model');

module.exports = {
  addToList(req, res) {
    const { label, done } = req.body;
    ToDoItem.create({
      label,
      done
    }, (err) => {
      if (err) console.log(err);
      else console.log("Success adding list item to DB!");
    });
  },
  getList(req, res) {
    // console.log("GET LIST");
    ToDoItem.find({}, (err, results) => {
      // console.log(results);
      if (err || !results) return res.send(err || "Results not found");
      // console.log(results)
      return res.send(results);
    });
  }
};