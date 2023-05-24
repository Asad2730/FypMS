const router = require("express").Router();
const ideaController=require('../controllers/ideaController');

router.get("/",ideaController.getIdeas);
router.get("/:eid",ideaController.getByEid);
router.post("/",ideaController.add);
router.put("/",ideaController.submitIdea);
router.get("/get/:uid",ideaController.getAcceptedIdeas);
router.delete("/:id",ideaController.deleteIDea);
router.patch("/:id/:type",ideaController.updateIDea);
router.get("/all/:id",ideaController.getAll);

module.exports = router;
