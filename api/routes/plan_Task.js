const router = require("express").Router();
const taskPlanController=require('../controllers/planTaskController');

router.post("/",taskPlanController.add);

module.exports = router;
