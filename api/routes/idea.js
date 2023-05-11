const router = require("express").Router();
const ideaController=require('../controllers/ideaController');

router.get("/",ideaController.getIdeas);
router.post("/",ideaController.add);

module.exports = router;
