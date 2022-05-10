const mongoose = require("mongoose");

const tagSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    minLength: 3,
    maxLength: 10,
  },
  hexColor: {
    type: String,
    require: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
  },
});

const Tag = mongoose.model("Tag", tagSchema);

module.exports = Tag;
