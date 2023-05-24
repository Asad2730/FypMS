const router = require("express").Router();
const ideaController=require('../controllers/ideaController');

router.get("/",ideaController.getIdeas);
router.post("/",ideaController.add);
router.put("/",ideaController.submitIdea);
router.get("/:uid",ideaController.getAcceptedIdeas);
router.delete("/:id",ideaController.deleteIDea);
router.patch("/:id",ideaController.updateIDea);

module.exports = router;
