const mongoose = require("mongoose");

const tagSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    minLength: 3,
    maxLength: 30,
  },

  hexColor: {
    type: "String",
    require: true,
  },
});

const noteSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
    minLength: 3,
    maxLength: 30,
  },
  description: {
    type: String,
    default: null,
  },
  status: {
    type: String,
    enum: ["active", "on hold", "completed", "dropped"],
    default: "active",
    require: true,
  },
  notebookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Notebook",
    default: null,
  },
  tag: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Tag",
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  modifiedAt: {
    type: Date,
    default: Date.now(),
    required: true,
  },
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
