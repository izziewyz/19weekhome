// Include the Mongoose Dependencies
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create a Schema for capturing clicks. We'll use clickID to update the same clickCounter
var ArticleSchema = new Schema({
    title: {
    type: String,
  },
  // This must be a unique number in the collection, and it must be entered
    url: {
    type: String,
  },
  date: {
    type: Date,
  },

});

// Create the Model
var Article = mongoose.model("Click", ArticleSchema);

// Export it for use elsewhere
module.exports = Article;
