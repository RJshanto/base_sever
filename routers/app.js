const express =require('express');
const studentController =require('../controller/stuController');

const router =express.Router();

router.post("/insertstu",studentController.InsertData);
router.get("/readdata",studentController.ReadData);
router.post("/updatedata/:id",studentController.UpdateData);
router.get("/deletedata/:id",studentController.DeleteData);

module.exports=router;