const Notebook = require("../models/notebookModel");
const AppError = require("../utils/appError");

exports.createNotebook = async (req, res, next) => {
  try {
    const { name, createdBy } = req.body;
    if (!name || !createdBy ) {
      return next(new AppError("Please provide all informations", 400));
    }

    const newNotebook = await Notebook.create(req.body);
    res.status(201).json({
      status: "success",
      newNotebook,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.updateNotebook = async (req, res, next) => {
  try {
    const notebook = await Notebook.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!notebook) {
      return next(new AppError("Can not find notebook", 400));
    }

    res.status(200).json({
      status: "success",
      notebook,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.deleteNotebook = async (req, res, next) => {
  try {
    const notebook = await notebook.findByIdAndDelete(req.params.id);
    if (!notebook) {
      return next(new AppError("Can not find notebook", 400));
    }

    res.status(200).json({
      status: "success",
      notebook,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.getNotebooks = async (req, res, next) => {
  try {
    const notebooks = await Notebook.find({});
    if (!notebooks) {
      return next(new AppError("Can not find notebooks", 400));
    }

    res.status(200).json({
      status: "success",
      notebooks,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.getNotebook = async (req, res, next) => {
  try {
    const notebook = await Notebook.findById(req.params.id);

    if (!notebook) {
      return next(new AppError("Can not find notebook", 400));
    }

    res.status(200).json({
      status: "success",
      notebook,
    });
  } catch (error) {
    console.log(error.message);
  }
};
