const mongoose = require("mongoose");
const Note = require("./noteModel");

const notebookSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    minLength: 3,
    maxLength: 30,
  },
  notesId: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Note',
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
  },
  modifiedAt: {
    type: Date,
    default: Date.now(),
    required: true,
  },
});



const Notebook = mongoose.model('Notebook', notebookSchema);

module.exports = Notebook;
