// Require mongoose
const mongoose = require("mongoose");
// Create Schema class
const Schema = mongoose.Schema;

// Create article schema
const articleSchema = new Schema({
  // title is a required string
  title: {
    type: String,
    required: true
  },
  // date is a required string
  date: {
    type: String,
    required: true
  },
  // url is a required string
  url: {
    type: String,
    required: true
  },
  // This only saves one note's ObjectId, ref refers to the Note model
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

// Create the Article model with the ArticleSchema
const Article = mongoose.model("Article", articleSchema);

// Export the model
module.exports = Article;
