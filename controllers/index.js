const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const Model = require('../models');

exports.deleteAll = 
  catchAsync(async (req, res, next) => {
    await Model.deleteMany({});

    res.status(204).json({
      status: 'success',
      data: null
    });
  });

exports.updateOne = 
  catchAsync(async (req, res, next) => {
    const doc = await Model.findById(req.params.id);

    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }

    doc.status = !doc.status;

    await doc.save();

    res.status(200).json({
      status: 'success'
    });
  });

exports.createOne = 
  catchAsync(async (req, res, next) => {
    await Model.create(req.body);
    const doc = await Model.find({status: false}).sort({'name':1});

    res.status(201).json({
      status: 'success',
      data: {
        data: doc
      }
    });
  });

exports.getAll =
  catchAsync(async (req, res, next) => {
    const doc = await Model.find({status: false}).sort({'name':1});
    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: doc.length,
      data: {
        data: doc
      }
    });
  });

  exports.getAllDone = 
  catchAsync(async (req, res, next) => {
    const doc = await Model.find({status: true});
    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: doc.length,
      data: {
        data: doc
      }
    });
  });
