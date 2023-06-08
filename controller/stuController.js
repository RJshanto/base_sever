const { query } = require('express');
const studentModel = require('../models/studentModel');



// Insert Data ....

exports.InsertData = (req, res) => {
  let reqBody = req.body;
  
  studentModel.create(reqBody)
    .then(data => {
      res.status(201).json({
        status: "success",
        data: data
      });
    })
    .catch(err => {
      res.status(400).json({
        status: "fail",
        data: err
      });
    });
};

// Read Data ...

exports.ReadData = (req,res)=>{
  let query={};
  let projection = 'name roll '
  studentModel.find(query,projection) 
   .then(data => {
    res.status(201).json({
      status: "success",
      data: data
    });
  })
  .catch(err => {
    res.status(400).json({
      status: "fail",
      data: err
    });
  });
}

// UpDate Data ....

exports.UpdateData = (req,res)=>{
let id = req.params.id;
let query = {_id:id};
let reqBody = req.body;

studentModel.updateOne(query,reqBody)
.then(data => {
  res.status(201).json({
    status: "success",
    data: data
  });
})
.catch(err => {
  res.status(400).json({
    status: "fail",
    data: err
  });
});

}

// delete data from collection

exports.DeleteData = (req,res)=>{
  let id = req.params.id;
  let query = {_id:id};

  
  studentModel.remove(query)
  .then(data => {
    res.status(201).json({
      status: "success",
      data: data
    });
  })
  .catch(err => {
    res.status(400).json({
      status: "fail",
      data: err
    });
  });
  
  }