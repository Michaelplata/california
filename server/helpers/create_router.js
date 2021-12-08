const express = require('express');
const ObjectId = require('mongodb').ObjectId;

const createRouter = function (collection) {

  const router = express.Router();

// ************* SHOW ALL ***************
router.get('/', (req, res) => {
    collection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
      .catch((err) => {
        console.log(err);
        res.status(500);
        res.json({
          status:500,
          error:err
        });
      });
  });



// ************* SHOW ONE by ID ***************
  router.get('/:id', (req, res) => {

// -------- different from show all -----------
    const id = req.params.id; 
    collection
      .findOne({
        _id:ObjectId(id)
      })
// --------------------------------------------

      // .toArray() --------- not necessary because it is only one record
      .then((doc) => res.json(doc))
      .catch((err) => {
        console.log(err);
        res.status(500);
        res.json({
          status:500,
          error:err
        });
      });
  });


// ************* ADD ONE ***************
router.post('/', (req, res) => {
  const newData = req.body;
  collection
    .insertOne(newData)
    .then((result) => {
      res.json(result.ops[0])
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        status:500,
        error:err
      });
    });
  });
  

// ************* DELETE ONE ***************
router.delete('/:id', (req, res) => {
  const id = req.params.id; 
  collection
    .deleteOne({
      _id:ObjectId(id)
    })
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        status:500,
        error:err
      });
    });
  });

// ************* UPDATE ONE ***************
router.put('/:id', (req, res) => {
  const id = req.params.id; 
  const updatedData = req.body;

  collection
    .updateOne(
      {_id:ObjectId(id)},
      { $set: updatedData}
    )
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        status:500,
        error:err
      });
    });
  });

  return router;

};

module.exports = createRouter;