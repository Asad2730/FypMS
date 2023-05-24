const router = require("express").Router();
const taskPlanController=require('../controllers/taskPlanController');


router.get("/get/:uid",taskPlanController.taskPlans);
router.get("/get",taskPlanController.getPlans);
router.get("/taskbyId/:id",taskPlanController.getTaskHistoryByID);
router.get("/submitedTasks/:uid",taskPlanController.submitedTasks);
router.get("/submitedPlans/:uid",taskPlanController.submitedPlans);
router.get("/:uid",taskPlanController.taskPlan_all);
router.get('/',taskPlanController.getAllTaskHistory);
router.get("/:id",taskPlanController.taskPlan_details);
router.post("/",taskPlanController.taskPlan_add);
router.delete("/:id",taskPlanController.taskPlan_delete);
router.put("/:id",taskPlanController.taskPlan_update);
router.get("/singleTask/:id",taskPlanController.singleTask);
router.get("/stdTask/:id",taskPlanController.studentTask);
router.post("/update/:id",taskPlanController.changeTaskStatus);
router.post("/updatePlan/:id",taskPlanController.changePlanStatus);
router.get("/taskHistory/:id",taskPlanController.taskHistory);
router.get("/getProposalsTask/:id",taskPlanController.getProposalTask);
router.put("/updateTask/:id",taskPlanController.updateTask);
router.get('/:m1/:m2',taskPlanController.getStdentsTasks);

module.exports = router;
