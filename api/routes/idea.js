const router = require("express").Router();
const ideaController=require('../controllers/ideaController');

router.get("/",ideaController.getIdeas);
router.post("/",ideaController.add);
router.put("/",ideaController.submitIdea);
router.get("/:uid",ideaController.getAcceptedIdeas);

module.exports = router;
