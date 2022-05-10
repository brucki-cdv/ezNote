const Note = require("../models/noteModel");
const Notebook = require("../models/notebookModel");
const AppError = require("../utils/appError");

exports.createNote = async (req, res, next) => {
  try {
    const { title, createdBy } = req.body;
    if (!title || !createdBy) {
      return next(new AppError("Please provide all informations", 400));
    }

    const newNote = await Note.create(req.body);
    res.status(201).json({
      status: "success",
      newNote,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.updateNoteTag = async (req, res, next) => {
  try {
    const { tag } = req.body;
    console.log("TAG = ", tag);

    if (!tag) {
      return next(new AppError("Please provide tag", 400));
    }

    const note = await Note.updateOne(
      { _id: req.params.id },
      { $addToSet: { tag: tag } }
    );

    // const note = await Note.updateOne(
    //   { "tag._id": { $ne: tag } },
    //   { $push: { tag: tag } }
    // );

    if (!note) {
      return next(new AppError("Can not find note", 400));
    }

    res.status(200).json({
      status: "success",
      note,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.updateNote = async (req, res, next) => {
  try {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!note) {
      return next(new AppError("Can not find note", 400));
    }

    res.status(200).json({
      status: "success",
      note,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.deleteNote = async (req, res, next) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) {
      return next(new AppError("Can not find note", 400));
    }

    res.status(200).json({
      status: "success",
      note,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.deleteTag = async (req, res, next) => {
  try {
    const { noteId, tagId } = req.query;
    console.log(noteId);
    console.log("chujk");
    await Note.updateOne({ _id: noteId }, { $pull: { tag: tagId } });
  } catch (error) {
    console.log(error.message);
  }
};

exports.getNotes = async (req, res, next) => {
  try {
    const { page, limit, search, status, tag, notebook, sort } = req.query;
    let notes;
    if (status != "" && status != null) {
      if (search != "" && search != null) {
        notes = await Note.find({ title: { $regex: search }, status: status })
          .populate({ path: "tag", model: "Tag" })
          .sort({ title: sort })
          .limit(limit * 1)
          .skip((page - 1) * limit)
          .exec(function (err, newtag) {
            if (err) {
              return next(new AppError("Something went wrong", 400));
            }

            res.status(200).json({
              status: "success",
              notes: newtag,
            });
          });
      } else {
        notes = await Note.find({ status: status })
          .populate({ path: "tag", model: "Tag" })
          .sort({ title: sort })
          .limit(limit * 1)
          .skip((page - 1) * limit)
          .exec(function (err, newtag) {
            if (err) {
              return next(new AppError("Something went wrong", 400));
            }

            res.status(200).json({
              status: "success",
              notes: newtag,
            });
          });
      }
    } else if (tag != "" && tag != null) {
      if (search != "" && search != null) {
        notes = await Note.find({
          title: { $regex: search },
          tag: tag,
        })
          .populate({
            path: "tag",
          })
          .sort({ title: sort })
          .limit(limit * 1)
          .skip((page - 1) * limit)
          .exec(function (err, newtag) {
            if (err) {
              return next(new AppError("Something went wrong", 400));
            }

            res.status(200).json({
              status: "success",
              notes: newtag,
            });
          });
      } else {
        notes = await Note.find({ tag: tag })
          .populate({
            path: "tag",
          })
          .sort({ title: sort })
          .limit(limit * 1)
          .skip((page - 1) * limit)
          .exec(function (err, newtag) {
            if (err) {
              return next(new AppError("Something went wrong", 400));
            }

            res.status(200).json({
              status: "success",
              notes: newtag,
            });
          });
      }
    } else if (notebook != "" && notebook != null) {
      if (search != "" && search != null) {
        notes = await Notebook.find({
          name: notebook,
        })
          .populate({
            path: "notesId",
            model: "Note",
            populate: { path: "tag", model: "Tag" },
          })
          .sort({ title: sort })
          .limit(limit * 1)
          .skip((page - 1) * limit)
          .exec(function (err, notes) {
            if (err) {
              return next(new AppError("Something went wrong", 400));
            }

            let arr = [];
            notes.map((val) => {
              val.notesId.map((note) => {
                if (note.title.includes(search)) {
                  arr.push(note);
                }
              });
            });

            // newtag.map((val) => {
            //   console.log(val);
            //   if (val.tag.length != 0 && val.tag != null) arr.push(val);
            // });

            res.status(200).json({
              status: "success",
              notes: arr,
            });
          });
      } else {
        notes = await Notebook.find({ name: notebook })
          .populate({
            path: "notesId",
            model: "Note",
            populate: { path: "tag", model: "Tag" },
          })
          .sort({ title: sort })
          .limit(limit * 1)
          .skip((page - 1) * limit)
          .exec(function (err, notes) {
            if (err) {
              return next(new AppError("Something went wrong", 400));
            }

            let arr = [];
            notes.map((val) => {
              val.notesId.map((note) => {
                arr.push(note);
              });
            });

            // newtag.map((val) => {
            //   console.log(val);
            //   if (val.tag.length != 0 && val.tag != null) arr.push(val);
            // });

            res.status(200).json({
              status: "success",
              notes: arr,
            });
          });
      }
    } else {
      if (search != "" && search != null) {
        notes = await Note.find({ title: { $regex: search } })
          .populate({ path: "tag", model: "Tag" })
          .sort({ title: sort })
          .limit(limit * 1)
          .skip((page - 1) * limit)
          .exec(function (err, newtag) {
            if (err) {
              return next(new AppError("Something went wrong", 400));
            }

            let arr = [];

            newtag.map((val) => {
              if (val.tag.length != 0 && val.tag != null) arr.push(val);
            });

            res.status(200).json({
              status: "success",
              notes: newtag,
            });
          });
      } else {
        notes = await Note.find({})
          .populate({ path: "tag", model: "Tag" })
          .sort({ title: sort })
          .limit(limit * 1)
          .skip((page - 1) * limit)
          .exec(function (err, newtag) {
            if (err) {
              return next(new AppError("Something went wrong", 400));
            }

            let arr = [];

            newtag.map((val) => {
              if (val.tag.length != 0 && val.tag != null) arr.push(val);
            });

            res.status(200).json({
              status: "success",
              notes: newtag,
            });
          });
      }
    }

    // if (!notes) {
    //   return next(new AppError("Can not find notes", 400));
    // }

    // res.status(200).json({
    //   status: "success",
    //   notes,
    // });
  } catch (error) {
    console.log(error.message);
  }
};

exports.getNote = async (req, res, next) => {
  try {
    const note = await Note.findById(req.params.id).populate({
      path: "tag",
      model: "Tag",
    });

    if (!note) {
      return next(new AppError("Can not find note", 400));
    }

    res.status(200).json({
      status: "success",
      note,
    });
  } catch (error) {
    console.log(error.message);
  }
};
