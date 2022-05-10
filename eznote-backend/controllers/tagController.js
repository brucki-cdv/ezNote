const Tag = require("../models/tagModel");
const AppError = require("../utils/appError");

exports.createTag = async (req, res, next) => {
  try {
    const { name, hexColor, createdBy } = req.body;
    if (!name || !hexColor || !createdBy) {
      return next(new AppError("Please provide all informations", 400));
    }

    const newTag = await Tag.create(req.body);
    res.status(201).json({
      status: "success",
      newTag,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.updateTag = async (req, res, next) => {
  try {
    const tag = await Tag.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!tag) {
      return next(new AppError("Can not find tag", 400));
    }

    res.status(200).json({
      status: "success",
      tag,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.deleteTag = async (req, res, next) => {
  try {
    const tag = await Tag.findByIdAndDelete(req.params.id);
    if (!tag) {
      return next(new AppError("Can not find tag", 400));
    }

    res.status(200).json({
      status: "success",
      tag,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.getTags = async (req, res, next) => {
  try {
    const tags = await Tag.find({});
    if (!tags) {
      return next(new AppError("Can not find tags", 400));
    }

    res.status(200).json({
      status: "success",
      tags,
    });
  } catch (error) {
    console.log(error.message);
  }
};
